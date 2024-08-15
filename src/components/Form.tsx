import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    username : string;
    email : string;
    password : string;
    // confirmPassword : string;
    // fullName : string;
    // surName  : string;
};


function Form() {
    const { register, handleSubmit } = useForm<Inputs>();
    //   const [username, setUsername] = useState();
  
    const onSubmit = (data: any) => {
      console.log(data);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Username:</label>
        <input {...register("username", { required: true, maxLength: 20 })} type="text" id="username" />
        <label htmlFor="">Email:</label>
        <input {...register("email")} type="text" id="email" />
        <label htmlFor="">Password:</label>
        <input {...register("password")} type="text" id="password" />
        <input type="submit" value="Submit" />
      </form>
    );
  }

export default Form