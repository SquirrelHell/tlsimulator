import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const onClick = () => setCounter((prev) => prev+1)
  console.log('in func1')
  useEffect(() => console.log('init'), [])
  console.log('in func2')
  return (

    <div>
      <button onClick={onClick}>{counter}</button>
    </div>
  );
}

export default App;
