import { useReducer } from 'react';
import { data } from '../components/module-data';
import PersonInfo from '../components/PersonInfo';
import AppReducer from '../components/AppReducer';

const Lab3 = () => {
  const [state, dispatch] = useReducer(AppReducer, data);

  console.log("Current state after action:", JSON.stringify(state, null, 2));

  return (
    <div className="container mt-4">
      <h1>Lab 3</h1>
      <div className="d-flex flex-wrap">
        {/* Bezpośrednie renderowanie listy osób */}
        {state.map((person) => (
          <PersonInfo
            key={person.id}
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
