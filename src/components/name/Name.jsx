import React, { useState } from "react";

// const Name = () => {
//   const [step, setStep] = useState(1);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [dob, setDob] = useState("");
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handlePrev = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = () => {
//     // Store submitted data in state
//     setSubmittedData({ name, email, password, dob });
//   };

//   return (
//     <>
//       {submittedData ? (
//         <div>
//           <h2>Submitted Data</h2>
//           <p>Name: {submittedData.name}</p>
//           <p>Email: {submittedData.email}</p>
//           <p>Password: {submittedData.password}</p>
//           <p>Date of Birth: {submittedData.dob}</p>
//         </div>
//       ) : (
//         <>
//           {step === 1 && (
//             <div>
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Your Name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//           )}
//           {step === 2 && (
//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Your Email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           )}
//           {step === 3 && (
//             <div>
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Your Password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           )}
//           {step === 4 && (
//             <div>
//               <label htmlFor="dob">Date of Birth</label>
//               <input
//                 type="date"
//                 id="dob"
//                 placeholder="Your Date of Birth"
//                 required
//                 value={dob}
//                 onChange={(e) => setDob(e.target.value)}
//               />
//             </div>
//           )}

//           <div>
//             {step > 1 && <button onClick={handlePrev}>Previous</button>}
//             {step < 4 && <button onClick={handleNext}>Next</button>}
//             {step === 4 && (
//               <button onClick={handleSubmit}>Submit</button>
//             )}
//           </div>
//         </>
//       )}
//     </>
//   );
// };

const Name = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState(null);
  const [step, setStep] = useState(1);

  const handleSumit = ()=>{
    setData({name , email , dob , pass})
  }
  console.log(data);

  return (
    <>
      <h1>Form</h1>

      {
        data ? <div>
            <p>Name : {data.name}</p>
        </div> : <>
        {step === 1 && (
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <label htmlFor="dob">Dob</label>
          <input type="text" id="dob" onChange={(e) => setDob(e.target.value)} />
        </div>
      )}

      {step === 4 && (
        <div>
          <label htmlFor="pass">Password</label>
          <input
            type="text"
            id="pass"
            required
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
     )}
     {
        step > 1 && <button onClick={()=>setStep(step-1)}>Previous</button>
     }
     {
        step < 4 && <button onClick={()=>setStep((prev) =>prev+1)}>Next</button>
     }
     {
        step === 4 && <button onClick={handleSumit}>Submit</button>
     }
        </>
      } 
    </>
  );
};

export default Name;
