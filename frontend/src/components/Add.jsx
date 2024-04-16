import React from 'react'


function Add({DATA,fun,p,DATAFUN,usefun,use,plate,id,idfun}) {

    const submit= async(event)=>{
        event.preventDefault();
        console.log("yes")
        try{
            console.log("point 1")
            const response=await  fetch('http://localhost:3000/add/',
            {method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(DATA)});
         
          DATAFUN((pre)=>({...pre,content:''}))
        console.log("111")
        fun(false)
        
    
    }
        catch(error){
console.log(error)
        }
        
    }

    function handler(e){
        const {name,value}=e.target;
        
        DATAFUN((pre)=>({...pre,content:value}))
  
        console.log(DATA)

    }
    const edit=async(e)=>{
        e.preventDefault();
try{
        const response=  await fetch(`http://localhost:3000/edit/${id}`,
        {method:"PUT",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(DATA)})
console.log("updated")
        idfun(null)
fun(false);}
catch(error){
    console.log(error)
}

    }
  return (
    <div  className='bg-gray-700 h-screen w-screen '><form  className='flex flex-col gap-6'>
        <input placeholder='write here ' name='name'  value={DATA.content} onChange={handler}/>
        <button type="submit" onClick={id!==null?edit:submit}>Submit</button></form>
        
        
        </div>
  )
}

export default Add