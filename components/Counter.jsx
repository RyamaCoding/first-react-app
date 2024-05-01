import React, { useState } from 'react';
import "./Counter.css";

function Counter() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [ ...prevArr, "+" ])
    }

    function addMinus() {
        setArr(prevArr => [ ...prevArr, "-" ])
    }

  return (
    <div>
      <button className="counter__button" onClick={addMinus}>-</button>
      <button className="counter__button" onClick={addPlus}>+</button>
    {arr}
    </div>
  );
}

export default Counter;
