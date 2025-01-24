'use client';

import { useAuth } from '@/app/lib/AuthContext';
import { useState, useEffect } from 'react';
import { db } from '@/app/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function UserBadge() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid); 
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      }
    };

    fetchUserData();
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4">
      <p className="text-white text-sm font-medium">
        {userData?.name || 'Nieznany użytkownik'}
      </p>
      <img
        src={userData?.photoURL || ''}
        alt="User Avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  );
}
