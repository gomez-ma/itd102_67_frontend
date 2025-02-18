import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/create-user", { name });
          navigate("/");
        } catch (error) {
          setMessage("Error creating user. Please try again.");
        }
      };   
  return (
    <div className='container'>
        <h1>Create User</h1>
        {message && <p className='text-danger'>{message}</p>}
        <form onSubmit={handleSubmit}>
            <div className='w-25 p-3'>
                <label className='form-label'>Name</label>
                <input 
                type='text' 
                className='form-control' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            </div>
            <div className='w-25 p-3'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    </div>
  )
}
export default CreateUser;