import { useContext, useState, useEffect } from 'react';
import AppContext from '../data/AppContext';
import PersonInfo from '../components/PersonalInfo';

const Lab3 = () => {
    const { items, dispatch } = useContext(AppContext);
    const [updateKey, setUpdateKey] = useState(0);

    useEffect(() => {
        setUpdateKey((prevKey) => prevKey + 1);
    }, [items]);

    console.log("Current state after action:", JSON.stringify(items, null, 2));

    return (
        <div className="container mt-4">
            <h1>Lab 3</h1>
            <div className="d-flex flex-wrap">
                {items.map((person) => (
                    <PersonInfo
                        key={`${person.id}-${updateKey}`}
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