import Heading from "./components/Heading";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";
import List from "./components/List";
import DashBorad from "./components/DashBorad";
import Login from "./components/Login";
import BMI from "./components/BMI";
import Form from "./components/Form";
import CalWater from "./components/CalWater";
 

function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncreaseCount = () => {
    setCount(count + 1);
    //count + 1;
  };

  const handleDecreaseCount = () => {
    setCount(count - 1);
  };

  let test = [1,2,3,4];
  test = [1,2,3,4,5,6];

  let isLogin : boolean = false;

  return (
    <>
 
{/* {!isLogin ? <Login></Login> : <DashBorad></DashBorad>}
<hr></hr>
<BMI></BMI>
<hr></hr>
<Form></Form> */}
<CalWater></CalWater>
</>  );
   


      {/* <Heading>
        <span>This is Heading Component</span>
      </Heading> */}
      {/* <h1>Heading Text</h1>
      <Counter
        setCount={setCount}
        handleIncreaseCount={handleIncreaseCount}
        handleDecreaseCount={handleDecreaseCount}
      >
        Count = {count}
      </Counter>
     
      <List items={test} render={(item) => <>{item}</>}></List>



      <List items={["1","2","3"]} render={(item) => <>{item}</>}></List>
      <Heading count={count}></Heading>


        <DashBorad></DashBorad> */}
      {/* <Button title="hello" color="red"></Button> */}
      {/* <Button color="green"></Button> */}
      {/* <Button title="Login" color="green"></Button> */}


}

function testF ()
{
  return "testtttttt"
}


export default App;
