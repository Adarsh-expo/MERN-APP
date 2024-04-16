import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Logsinpage({ change, changefun }) {
    const [data, setData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));}

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login/', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            });
            console.log("Response:", response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ left: "465px", backgroundColor: "white" }} className='flex flex-col h-48 w-80 items-center hover:opacity-75 justify-center important! bg-slate-400 z-50 shadow-2xl shadow-zinc-800 relative top-44 rounded-3xl pb-4'>
            <form className='flex flex-col gap-3'>
                <div>
                    <input type="text" placeholder='Email' name="email" className='h-10 rounded-xl w-19 text-center' onChange={handleChange} />
                </div>
                <div>
                    <input type="password" placeholder='Password' name="password" className='h-10 rounded-xl text-center' onChange={handleChange} />
                </div>
                <div>
                    <button className='hover:bg-neutral-400' onClick={handleSubmit}>{change ? "LOGIN" : "SIGNUP"}</button>
                </div>
            </form>
            {change ? (
                <h4>Don't have an account? <Link to="/signup"><button onClick={(e) => { e.preventDefault(); changefun(false) }}>Sign up</button></Link></h4>
            ) : null}
        </div>
    );
}

export default Logsinpage;
