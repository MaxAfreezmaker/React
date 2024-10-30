import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { data } from '../components/module-data';

function Laboratoria2() {

  const [searchParams, setSearchParams] = useSearchParams();

  const [inputId, setInputId] = useState('');
  const [person, setPerson] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (idToSearch) => {
    const id = idToSearch || inputId;

    if (!id) {
      setError('Brak identyfikatora osoby.');
      setPerson(null); 
      return;
    }

    if (!idToSearch) {
      setSearchParams({ id });
    }

    const foundPerson = data.find((p) => p.id === parseInt(id));

    if (!foundPerson) {
      setError('Nie znaleziono osoby o tym identyfikatorze.');
      setPerson(null); 
    } else {
      setError(''); 
      setPerson(foundPerson); 
    }
  };


  useEffect(() => {
    const idFromQuery = searchParams.get('id');
    if (idFromQuery) {
      setInputId(idFromQuery); 
      handleSearch(idFromQuery); 
    }
  }, [searchParams]); 

  return (
    <div>
      <h1>Lab2 - Wyszukiwanie osoby</h1>

      <div>
        <input
          type="text"
          placeholder="Wpisz identyfikator osoby"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Szukaj</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {person && (
        <div>
          <h3>Profil osoby</h3>
          <p>Imię: {person.name}</p>
          <p>Data urodzenia: {person.birth}</p>
          <p>Kolor oczu: {person.eyes}</p>
        </div>
      )}
    </div>
  );
}

export default Laboratoria2;
