import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext);
    console.log(counterValue)
    return(
        <div>
            <p>I am first child component. I am using counterContext API.</p>
            <p>Counter: {counterValue[0]}</p>
            <button onClick={() => { counterValue[1](++counterValue[0]) }}>Tick</button>
            
        </div>
    );
}

export default Child;