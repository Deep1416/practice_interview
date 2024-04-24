import React, { useEffect, useState } from "react";
let flower = [
  "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1560790671-b76ca4de55ef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1675873580364-8845f681b4ed?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fHww",
];
const Carsoul12 = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
      setCount((prev) => prev === flower.length - 1 ? 0 : prev +1)
    }, 3000);

    return () =>clearInterval(interval)

  } , [])

  const handlePrevios = () =>{
    setCount((prev) =>prev === 0 ? flower.length - 1 : prev - 1);
  }

  const handleNext = () =>{
    setCount((prev) =>prev === flower.length - 1 ? 0 : prev + 1);
  }

  return (
    <>
      <div>
        <img src={flower[count]} width={"250px"} alt="" />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={handlePrevios}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default Carsoul12;
