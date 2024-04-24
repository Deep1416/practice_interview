import React, { useState } from "react";

let cat = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww",
];

const Cat = () => {
  const [image, setImage] = useState(null);
  console.log(image);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Image Cat</h1>
      <div style={{display:"flex"}}>
        {cat.map((e) => {
          return (
            <div>
              <img src={e} width={"250px"} alt="" onClick={() => setImage(e)} />
            </div>
          );
        })}

        <div>
          <h2>hello</h2>
          {
           image && <img src={image} width={"200px"} height={"200px"} alt="" />
          }
        </div>
      </div>
    </div>
  );
};

export default Cat;
