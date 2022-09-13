import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users,setUsers]= useState([])

    useEffect(()=>{
        loadUsers();},[]);

/* if we don't give empty[] array, it will run unlimitated times */
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }
/* -------------------------Delete user------------------------ */
const {id}= useParams();

const deleteUser = async (id) => {
   await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers();
}
/* ----------------------Returen start ----------------------------------- */
  return (
    <div className='container'>
        <div className='py-4'>
        <h1>All Users</h1>
        <table className="table border shadow table-striped">
  <thead>
    <tr>
      <th scope="col">Sn</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">User Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {/* This map does to create new array and every elements, when new user will create it will show on the talbe */}
    {
        users.map((user,index)=>(
        <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className= {'btn btn-primary mx-2 round'} to={`/viewuser/${user.id}`}>View</Link>
                <Link className= {'btn btn-outline-success mx-2 round'} to={`/edituser/${user.id}`}>Edit</Link>
                <button className='btn btn-danger mx-2 round' onClick={()=>deleteUser(user.id)}>Delete</button>
            </td>

        </tr>
        ))}   
  </tbody>
</table>
</div>
</div>
  );}
