import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Accordion</h1>
      <div className="acc_center">
        {data.map((item) => (
          <div className="acc_box" key={item.id}>
            <div>
              <h1 className="acc_title">{item.title}</h1>
              {openId === item.id && <p className="acc_desc">{item.info}</p>}
            </div>
            <button
              className="acc_add"
              onClick={() => toggleAccordion(item.id)}
            >
              {openId === item.id ? "-" : "+"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
