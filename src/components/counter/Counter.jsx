import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  const [add, setAdd] = useState(1);
  const adding = () => {
    setState(state + Number(add));
  };

  const sub = () => {
    if (state > 0) {
      setState(state - Number(add));
    }
  };

  const reset =() =>{
    setState(0);
    setAdd(1)
  }

  return (
    <div className="counter">
      <div>
        <div className="number">{state}</div>
        <div className="btn">
          <button className="sign" onClick={adding}>
            +
          </button>
          <button className="sign" onClick={sub}>
            -
          </button>
        </div>
        <label htmlFor="hello">Increment/Decrement by</label>
        <input
          type="text"
          id="hello"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <div onClick={reset}>Reset</div>
      </div>
    </div>
  );
};

export default Counter;
