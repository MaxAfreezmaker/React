import React from 'react';
import { data } from '/src/components/module-data'

function Laboratoria1(){
    return(
<div className="data-list">
        <h2>Dane Personalne</h2>
        {data.map((person) => (
          <div key={person.id} className="person-card">
            <h3>Imię: {person.name}</h3>
            <p>Data urodzenia : {person.birth}</p>
            <p>Kolor oczu : {person.eyes}</p>
          </div>
        ))}
      </div>
    )
}


export default Laboratoria1;