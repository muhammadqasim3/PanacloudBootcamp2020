import React, {useState} from 'react';
import './App.css';
import counterContext from './CounterContext';
import Parent from './Parent';

function App() {
  let countState = useState(1) //[count, setCount]
  
  return (
    <counterContext.Provider value={countState}>
      <div className="App">
        <Parent/>
      </div>
    </counterContext.Provider>
  );
}

export default App;