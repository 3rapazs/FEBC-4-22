import React from 'react'
import { useState } from 'react';


function BMI() {

    const [weight,setWeight] = useState<number>(0);
    const [height ,setHeight ] = useState<number>(0);
    const [result ,setResult ] = useState<number>(0);
    
    const OnChnageWeight = (event:React.ChangeEvent<HTMLInputElement>) => {
      setWeight(+event.target.value);
    };
    
    const OnChnageHeight = (event:React.ChangeEvent<HTMLInputElement>) => {
      setHeight(+event.target.value);
    };

    
    const OnSubmit = (event:React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
    console.log(weight);
    console.log(height);
    const bmi = weight / (height / 100) ** 2;
    setResult(+bmi)
    console.log("BMI:" + bmi);  
    };


    return (
        <>
        <form onSubmit={OnSubmit}>
            <div>
    
              <label htmlFor="weight">น้ำหนัก:</label>
              <input type="number" id="weight" name="weight" 
              onChange={OnChnageWeight} 
             
              />
            </div>
            <div>
              <label htmlFor="height ">ส่วนสูง:</label>
              <input type="number" id="height " name="height " 
              onChange={OnChnageHeight}/>
            </div>
            <button type='submit'>คำนวณ IBM</button>
            <p>{result}</p>
          </form>
        </>
      );
}

export default BMI