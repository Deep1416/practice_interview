import React, { useEffect, useState } from "react";

let Lights = {
  green: "green",
  yellow: "yellow",
  red: "red",
};

const Redlight = () => {
  const [active, setActive] = useState(Lights.red);

  useEffect(() => {
    switch (active) {
      case Lights.red:
        setTimeout(() => {
          setActive(Lights.yellow);
        }, 4000);
        break;
      case Lights.yellow:
        setTimeout(() => {
          setActive(Lights.green);
        }, 5000);
        break;
      case Lights.green:
        setTimeout(() => {
          setActive(Lights.red);
        }, 3000);
        break;
      default:
        return;
    }
  }, [active]);

  return (
    <div className="container">
      <div
        className="circle red"
        style={ active !== Lights.red ?{ opacity: 0.5 }  : null}
      ></div>
      <div
        className="circle yellow"
        style={active !== Lights.yellow ? { opacity: 0.5 } : null}
      ></div>
      <div
        className="circle green"
        style={active !== Lights.green ? { opacity: 0.5 } : null}
      ></div>
    </div>
  );
};

export default Redlight;
