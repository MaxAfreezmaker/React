"use client";
import { useAuth } from "@/app/lib/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <div>Brak dostępu. Zaloguj się, aby zobaczyć tę stronę.</div>;
  }

  return (
    <div>
      <h1>Witaj, {user.email}!</h1>
      <p>To jest Twoja chroniona strona profilu.</p>
    </div>
  );
}
