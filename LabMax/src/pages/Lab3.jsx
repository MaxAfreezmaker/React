import { useReducer, useEffect, useState } from 'react';
import { data } from '../components/module-data';
import PersonInfo from '../components/PersonalInfo';
import AppReducer from '../data/AppReducer';

const Lab3 = () => {
  const [state, dispatch] = useReducer(AppReducer, data);
  const [updateKey, setUpdateKey] = useState(0);

  // Wymuszamy ponowne renderowanie po każdej zmianie stanu
  useEffect(() => {
    setUpdateKey((prevKey) => prevKey + 1);
  }, [state]);

  console.log("Current state after action:", JSON.stringify(state, null, 2));

  return (
    <div className="container mt-4">
      <h1>Lab 3</h1>
      <div className="d-flex flex-wrap">
        {state.map((person) => (
          <PersonInfo
            key={`${person.id}-${updateKey}`} // Dynamiczny klucz wymuszający renderowanie
            id={person.id}
            name={person.name}
            birth={person.birth}
            eyes={person.eyes}
            rating={person.rating}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
};

export default Lab3;
