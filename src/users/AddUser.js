import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

/*---- navigate when click on submit button to Home page---- */
let navigate=useNavigate();

/*------- store the information in state- deconstruct(analyze) the variable------------- */
const [user,setUser]=useState({
    name:"",
    username:"",
    email:""
});
/*-------- assign the field value-------------------- */
const{name,username,email}=user

const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
};

/*------- submit the user data in table & use axios to post the data------- */
const onSubmit=async (e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8080/user",user)
  navigate("/");
}
/* -------------------------Return start------------------------------------------------- */
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'> Register User</h2>
        {/*--------- Form start------------------ */}
        <form onSubmit={(e) => onSubmit(e)}>

            <div className='mb-3'>
                <label htmlFor='FullName' className='form-label'>
                    Full Name
                </label>
                <input type={'text'} 
                className='form-control' 
                placeholder='Enter Your Full Name' 
                name='name'
                value={name} 
                onChange={(e)=>onInputChange(e)} />
            </div>

            <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>
                    Username
                </label>
                <input type={'text'} 
                className='form-control' 
                placeholder='Enter Your Username' 
                name='username'
                value={username} 
                onChange={(e)=>onInputChange(e)}/>
                
            </div>

            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                    E-mail
                </label>
                <input type={'text'} 
                className='form-control' 
                placeholder='Enter Your Email Address' 
                name='email'
                value={email} 
                onChange={(e)=>onInputChange(e)}/>
            </div>

            <button type='submit' className='btn btn-primary mx-2'>Submit</button>
            {/* <button type='reset' className='btn btn-outline-success mx-2'>Reset</button> */}
            <Link type='cancel' className='btn btn-danger' to="/">Cancel</Link>
            </form>
        </div>

      </div>
    </div>
  )
}
