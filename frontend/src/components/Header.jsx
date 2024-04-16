import React from 'react'
import{Link} from 'react-router-dom'
import { useState } from 'react'

function Header({change,changefun,val,valfun}) {
    
  return (
    <div  className='bg-slate-950
    h-14 rounded-2xl flex flex-row justify-around items-center  '>
        
        <Link   to="/home"><div  className='font-semibold ring-1  box-border h-7 w-16 text-center text-white bg-slate-800 rounded-xl'>Home</div></Link>
        <Link  to="/about"> <div  className='font-semibold  ring-1  box-border h-7 w-16 text-center text-white bg-slate-800 rounded-xl '>About</div></Link>
        <Link  to="/login"><div  className='font-semibold  ring-1   box-border h-7 w-16 text-center text-white bg-slate-800 rounded-xl ' onClick={(e)=>{ changefun(true);valfun(null)}}  >Log In</div></Link>


        <Link  to="/signup"><div  className='font-semibold ring-1 text-white box-border h-7 w-16 text-center bg-slate-800 rounded-xl' onClick={(e)=>{ changefun(false)}}  >Sign Up</div></Link></div>
        
        
        
   
   
  )
}

export default Header