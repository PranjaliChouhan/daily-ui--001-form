import './App.css';
import { useState } from 'react';
import {Formik,ErrorMessage,Form, Field} from "formik";


function App() {
  const [selectedOption, setSelectedOption] = useState('');

  
  const options=["1","2","3","4","5"];
 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
     <>
     <h1>Tailoring Contest Entry Form</h1>
     <Formik
      >
         <Form>
    <div className='conatiner'>
            <label  className="area" htmlFor="Name"> Name</label>
            <input
         id="firstName"
         name="firstName"
         type="text"
        />
        <input
         id="lastName"
         name="lastName"
         type="text"
         />
          <label  className="area" htmlFor="Name"> Age</label>
          <input
         id="age"
         name="age"
         type="number"
         />
          <label  className="area" htmlFor="Name"> Address</label>
          <input
          placeholder='address'
         id="address"
         name="address"
         type="text"
         />
         <input
         id="address-line2"
         name="address Line2"
         type="text"
         placeholder='address-line2'
         />
         <input
         id="city"
         name="city"
         type="text"
         placeholder='city'
         />
         <input
         id="postal-code"
         name="code"
         type="number"
         placeholder='postal code'
         />
         <select name="country" defaultValue="country" id='country' >
         <option value="India">country</option>
        <option value="India">India</option>
        <option value="US">US</option>
        <option value="Nepal">Nepal</option>
      </select>
          <label  className="area" htmlFor="Name"> Phone-number</label>
          <input
         id="phonenumber"
         name="phonenumber"
         type="number"
         />
         <label  className="area" htmlFor="skill"> skill-level</label>
         {options.map((option, index) => (
        <div key={index}>
          <input
          className='options'
            type="radio"
            id={`option-${index}`}
            name="options"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
      <button >submit</button>
    </div>
         </Form>
     
     </Formik>
    </>
  );
}

export default App;
