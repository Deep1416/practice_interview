import React, { useEffect, useState } from "react";

const cat = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww",
];

const Carsoul = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) =>
        prevCount === cat.length - 1 ? 0 : prevCount + 1
      );
    }, 3000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const handlePrevious = () => {
    setCount((prevCount) => (prevCount === 0 ? cat.length - 1 : prevCount - 1));
  };

  const handleNext = () => {
    setCount((prevCount) => (prevCount === cat.length - 1 ? 0 : prevCount + 1));
  };

  console.log(count);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Hello Carousel</h1>

        <img src={cat[count]} alt="" />

        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Carsoul;
