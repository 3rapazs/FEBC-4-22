import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function CalWater() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [result, setResult] = useState(0);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // const SetResult = () => {
  //   setResult((prevMode) => !prevMode);
  // };

  const OnChangeWeight = (event:React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value * 2.2 * 30 / 2;
    setResult(+value);
  };


  return (
    <>


    <div className="text-center">
      <Container
        className={`d-flex flex-column justify-content-center 
        align-items-center ${isDarkMode ? 
        'bg-dark text-light' : 'bg-light'}`}
        style={{ minHeight: '70vh' }}
      >
        <h1 className="text-center mb-5">
         ควรดื่มน้ำวันละเท่าไหร่ ?
       </h1>

       <h2 className="text-center mb-5">
        {result.toFixed(2)} มล. <br></br><br></br>
        <input type="number" id="weight " name="weight" placeholder='น้ำหนักของคุณ (กิโลกรัม)'  onChange={OnChangeWeight} 
              />
       </h2>


        {/* <h1>{isDarkMode ? 'Dark Theme' : 'Light Theme'}</h1> */}
        <Button variant="primary" onClick={toggleDarkMode}>
          {isDarkMode ? <><p>Light</p><CiLight /></> : <><p>Dark</p><MdDarkMode /></>}

          
        </Button>
      </Container>
      </div>
    </>
  );
}

export default CalWater