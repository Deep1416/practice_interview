import React, { useState } from "react";

let arr = [1, 2, 3, 4, 5];
const Content = () => {
  const [content, setContent] = useState("1");
  const handleClick1 = (idx) => {
    setContent(idx + 1);
  };

  return (
    <div style={{ marginTop: "250px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {arr.map((e, idx) => {
          return (
            <button
              key={idx}
              onClick={() => handleClick1(idx)}
              style={{
                backgroundColor: content === idx + 1 ? "lightblue" : "white",
                padding: "10px 20px",
                border: "1px solid black",
              }}
            >
              {e}
            </button>
          );
        })}
      </div>
      <div style={{ textAlign: "center" }}>Content for Tab {content}</div>
    </div>
  );
};

export default Content;
