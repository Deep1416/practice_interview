// import React, { useState } from "react";

// const Show = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [offer, setOffer] = useState(false);

//   return (
//     <>
//       <div>
//         {!isOpen && <button onClick={() => setIsOpen(true)}>Show Offer</button>}
//         {!offer && (
//           <div style={{ display: isOpen ? "block " : "none" }}>
//             <button onClick={() => setIsOpen(false)}>*</button>
//             <div>Lorem ipsum dolor sit amet.</div>
//             <button onClick={() => setOffer(true)}>Accept Offer</button>
//           </div>
//         )}
//         {offer && <div>Offer Accepted</div>}
//       </div>
//     </>
//   );
// };

// export default Show;

import React, { useState } from "react";

function Show() {
  let [show, setShow] = useState(true);
  let [accept, setAccept] = useState(true);

  return (
    <div>
      {accept ? (
        show ? (
          <button className="btn1" onClick={() => setShow(false)}>
            show offer
          </button>
        ) : (
          <div className="main">
            <div className="box">
              <p className="cross" onClick={() => setShow(true)}>
                x
              </p>
              <p className="txt1">
                click the button below to accept our amazing offer!
              </p>
              <button className="btn2" onClick={() => setAccept(false)}>
                Accept offer
              </button>
            </div>
          </div>
        )
      ) : (
        <h1>Offer Accepted</h1>
      )}
    </div>
  );
}

export default Show;
