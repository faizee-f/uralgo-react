import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import AuthService from '../App/Authentication'
import './css/SignUp.css'
import { useForm } from "react-hook-form";

function SignUp() {


  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState();


  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    try {
      const user = AuthService.register(data.firstName,data.lastName,data.email,data.password)
      console.log("All clear for signup")
      console.log(user)
      
    }
    catch (err) {
      console.log(err);
    }
  };
  return <div>
    <div>
      <div className="container mt-5">
        <div className="container text-center">
          <div className="row m-5 no-gutters shadow-lg">

            <div className="col-md-6 p-3 d-none d-md-block">
              <img width='100%' src="https://source.unsplash.com/random/500x500/?computer" alt="" />
            </div>
            <div className="col-md-6 bg-white p-5">
              <h5>Create a new account</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className='form-control my-4' onChange={(e) => {
                  setFirstName(e.target.value);
                  setAlert('')
                }}
                  placeholder="first name" {...register("firstName", { required: true, maxLength: 20 })} />
                <div className='text-danger'>
                  {errors.firstName?.type === 'required' && "First name is required"}
                </div>
                <input type="text" className='form-control my-4' onChange={(e) => {
                  setLastName(e.target.value);
                  setAlert('')
                }} placeholder="last name" {...register("lastName", { required: true, maxLength: 20 })} />
                <div className='text-danger'>
                  {errors.lastName?.type === 'required' && "Last name is required"}
                </div>
                <input type="text" className='form-control my-4' onChange={(e) => {
                  setEmail(e.target.value);
                  setAlert('')
                }} type='email' placeholder="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <div className='text-danger'>
                  {errors.email?.type === 'required' && "Email is required"}
                </div>
                <input type="password" className='form-control my-4' onChange={(e) => {
                  setPassword(e.target.value);
                  setAlert('')
                }} placeholder="password" {...register("password", { required: true, maxLength: 20 })} />
                <div className='text-danger'>
                  {errors.password?.type === 'required' && "Password is required"}
                </div>
                <input type="submit" className='btn btn-dark w-100 font-weight-bold mt-2' value="Sign Up" />
              </form>
              <div class="sideline my-4">OR</div>
              <div class="btn btn-danger my-3">Signup using Google</div><br />
              <div class="btn btn-success">Signup using Facebook</div>

              <div class="mt-5">
                <p>Already have an account ? <Link to='/signin'>Sign In</Link>  </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>;
}

export default SignUp;
