import {useState} from 'react'

const Increment = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);

        if (count <= 0) {
            setCount(0);
        }
    };

  return (
    <div>
        <h2>Increment Component</h2>
        <button onClick={handleIncrement}>Increment +</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrement}>Decrement -</button>
    </div>
  )
}

export default Increment;