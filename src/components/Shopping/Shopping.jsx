import React, { useEffect, useState } from "react";

const api = "https://api.frontendeval.com/fake/food/";

const Shopping = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState([]);
  const [save, saveData] = useState([]);
  const [active, setActive] = useState(false);
  useEffect(() => {
    fetch(`https://api.frontendeval.com/fake/food/${data}`)
      .then((res) => res.json())
      .then((parsed) => setValue(parsed));
  }, [data]);

  const handleAdd = (name) => {
    saveData((prev) => [...prev, name]);
    setData("")
  };

  const handlerUderline = () => {
    setActive((prev) => !prev);
  };

  const handleDelete = (id) => {
    let del = save.filter((e, idx) => id !== idx);
    saveData(del);
  };

  return (
    <>
      <h1>My Shopping List</h1>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <ul>
        {value.map((item, index) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleAdd(item)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        {save &&
          save.map((e, idx) => (
            <div>
              <button onClick={() => handlerUderline(idx)}>+</button>
              <p style={{ textDecoration: active ? "line-through" : null }}>
                {e}
              </p>
              <button onClick={() => handleDelete(idx)}>-</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shopping;
