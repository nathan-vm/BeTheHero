import React from 'react';
import Header from './Header'
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(0)
// Array [valor,funcaodeAtualizacao]
  function increment(){
    setCounter(counter+1)
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
