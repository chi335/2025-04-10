import { useState } from 'react';
export default function Counter7() {
    const [number, setNumber] = useState(0);
    App.js
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number => number + 1);
                console.log(number)
                setNumber(number => number + 2);
                console.log(number)
                setNumber(number => number + 3);
                console.log(number)
            }}>+3</button>
        </>
    )
}