'use client';

import { useEffect, useState } from 'react';
import { db } from '@/app/lib/firebase';
import { useAuth } from '@/app/lib/AuthContext';
import { doc, deleteDoc, collection, query, where, getDocs, addDoc } from 'firebase/firestore';


export default function CarsPage() {
  const { user } = useAuth();
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ make: '', model: '', year: '', mileage: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForm, setShowForm] = useState(false); 
  const deleteCar = async (carId) => {
    setError('');
    setSuccess('');
  
    if (!carId) {
      setError('Nie można usunąć samochodu bez ID.');
      return;
    }
  
    try {

      await deleteDoc(doc(db, 'Cars', carId));
  
      setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
  
      setSuccess('Samochód został usunięty.');
    } catch (err) {
      console.error('Error deleting car:', err.message);
  
      if (err.code === 'permission-denied') {
        setError('Nie masz uprawnień do usunięcia tego samochodu.');
      } else {
        setError('Nie udało się usunąć samochodu.');
      }
    }
};
  
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const q = query(collection(db, 'Cars'), where('userId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const carsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCars(carsData);
      } catch (err) {
        console.error('Error fetching cars:', err.message);
      }
    };

    if (user) {
      fetchCars();
    }
  }, [user]);

  
  const addCar = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!user) {
        setError('Musisz być zalogowany, aby dodać samochód.');
        return;
      }
      

    if (!newCar.make || !newCar.model || !newCar.year || !newCar.mileage) {
        setError('Wszystkie pola są wymagane.');
        return;
     }
     if (newCar.year < 1886 || newCar.year > new Date().getFullYear()) {
        setError('Podaj poprawny rok.');
        return;
     }
     if (newCar.mileage < 0) {
        setError('Przebieg musi być liczbą dodatnią.');
        return;
     }

    try {
      await addDoc(collection(db, 'Cars'), {
        ...newCar,
        userId: user.uid, 
      });
      setSuccess('Samochód został dodany.');
      setNewCar({ make: '', model: '', year: '', mileage: '' });
      setShowForm(false); 
      const updatedCars = [...cars, { ...newCar }];
      setCars(updatedCars);
    } catch (err) {
      console.error('Error adding car:', err.message);
      setError('Nie udało się dodać samochodu.');
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Twoje samochody</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 " name="Dodaj"
        >
          Dodaj auto
        </button>
      )}

    
      {showForm && (
        <form onSubmit={addCar} className="space-y-4">
          <h2 className="text-lg font-bold">Dodaj samochód</h2>
          <div>
            <label htmlFor="make" className="block text-sm font-medium">
              Marka
            </label>
            <input
              id="make"
              value={newCar.make}
              onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium">
              Model
            </label>
            <input
              id="model"
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium">
              Rok
            </label>
            <input
              id="year"
              type="number"
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              required
            />
          </div>
          <div>
            <label htmlFor="mileage" className="block text-sm font-medium">
              Przebieg
            </label>
            <input
              id="mileage"
              type="number"
              value={newCar.mileage}
              onChange={(e) => setNewCar({ ...newCar, mileage: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
              required
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Dodaj Samochód
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Anuluj
            </button>
          </div>
        </form>
      )}

      <div className="mt-8">
        <h2 className="text-lg font-bold">Lista samochodów</h2>
        {cars.length === 0 ? (
          <p>Nie masz jeszcze żadnych samochodów.</p>
        ) : (
            cars.map((car) => (
                <div key={car.id} className="p-4 border rounded-md shadow-sm mt-4">
                  <h3>
                    {car.make} {car.model}
                  </h3>
                  <p>Rok: {car.year}</p>
                  <p>Przebieg: {car.mileage} km</p>
                  <button
          onClick={() => deleteCar(car.id)}
          className="bg-red-600 text-white py-1 px-2 rounded-md mt-2 hover:bg-red-700"
        >
          Usuń
        </button>
                </div>
             ))
        )}
      </div>
    </div>
  );
}
