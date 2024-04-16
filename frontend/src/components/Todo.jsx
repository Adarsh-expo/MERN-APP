import React from 'react'
import { useState ,useEffect} from 'react'
import Add from './Add'

function Todo({cerdfun,cred}) {
  const [use,usefun]=useState(false)
  const [wholedata, wholefun]=useState([])
  const[plate,platefun]=useState(false)
  const[DATA,DATAFUN]=useState({content:"",Credential:cred})
  const [id,idfun]=useState(null)
 
 
 
  const del=async(e)=>{
    const id=e.target.id;
    try{
   const response=await fetch(`http://localhost:3000/get1/${id}`)
   console.log(id)
usefun((pre)=>!pre)
    }
    catch(err){
      console.log(err)
    }
  }
  

  const showcontent=async()=>{

const response=  await fetch(`http://localhost:3000/get/${cred}`)

const val= await response.json()
// const {email_id,content}=val;
// this function for updating data
// wholefun({email_id:email_id,content:content});
 console.log(val)
wholefun(val);



  }


const edit=(e)=>{

e.preventDefault();
platefun((pre)=>!pre)
const index=e.target.name;
console.log(e.target.name)
idfun(wholedata[index].id)

DATAFUN((pre)=>({...pre,content:wholedata[index].content}))


}


useEffect(()=>{showcontent()},[plate,use])
  return (<>
    <div  className='h-screen w-screen    bg-opacity-80 rounded-3xl  flex   justify-center' >
       <div className='flex flex-col gap-24 shadow-2xl h-1/3 w-64'> <h1>LETS TODO</h1>

       <div><button  onClick={()=>{platefun((pre)=>!pre)}}  >Add</button><button></button></div>
   {plate&&<Add   DATA={DATA}  fun={platefun} DATAFUN={DATAFUN}  usefun={usefun} use={use} plate={plate}  id={id} idfun={idfun}/>}
       
       
        
        {wholedata.map((element,index)=> <div  key={element.id} className='flex 
         flex-row  min-w-96  h-24 border-2 border-rose-600  
          justify-between   rounded-3xl  transition ease-in-out delay-150   hover:scale-110 '><button  name={index}  onClick={edit}>EDIT</button>
        <h1>{element.content}</h1>
        <button  id={element.id}    onClick={del}>DELETE</button></div>)}
        </div>
        </div></>

  )
}

export default Todo