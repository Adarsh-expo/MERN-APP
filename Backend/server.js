import express from "express";
import pg from 'pg';
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';
import bcrypt, { hash } from 'bcrypt';
import db from './db.js';
import env from 'dotenv'
nfnnnn
const port =3000;
const app=express();
env.config();
const saltrounds=10;
app.use(cors())
app.use(express.json())
// databse connection shift env later
 

//  database connection promise return
 db.connect().
 then(()=>
 {console.log("successfull data Connection")}
 ).catch((error)=>{

    console.log(error)
 })

app.get('/',(req,res)=>{
    res.send("kk")
})
// for sigup or account creation
app.post('/signup',async(req,res)=>{
    console.log("kkkkk")
    const id=uuidv4();
const {email,password}=req.body;
console.log(req.body)
try{

    const res1=await db.query('SELECT * FROM userinfo WHERE email_id=$1',[email]);
    const val=res1.rows;
    if(val.length==0){
        bcrypt.hash(password,saltrounds,async(error,hash)=>{
            if(error){ console.log(error)}
            else{
                console.log(hash)
   const response=await db.query('INSERT INTO userinfo (id,email_id,password) VALUES($1,$2,$3)',[id,email,hash]);
console.log("data successfully inserted")
res.json({ bool:true,  status:"Account Created"})}

        })
 }
else{ console.log("email exist")
    res.json({  bool:true,status:"Account with email exists"})
}
}

    catch(error){
        console.log(error)
    }
   


})


// for login purpose
app.post('/login',async(req,res)=>{
    try{
    const{email,password:loginpassword}=req.body;
    const val= await db.query('SELECT * FROM userinfo WHERE email_id=$1',[email])
    const val1=val.rows[0];
   
    console.log("ll")
    const password1=val1.password;
 await bcrypt.compare(loginpassword,password1,(error,result)=>{
if(error){
    console.log("error at comparison");
  
}
else{
   if(result){
    const credential=val1.id;
    res.json({bool:false,userid:`${credential}`})}
    else{
        res.json({bool:true,status:"Wrong credentials"})
        
    }

}


})}
catch(error){
    console.log(error)
}


})
// content adding
app.post('/add',async(req,res)=>{
    const {content,Credential}=req.body
    console.log(Credential)
    try{
const response= await db.query('INSERT INTO datas (userid,content) VALUES($1,$2)',[Credential,content]);
res.json();
    console.log("successfully inserted")
    console.log(content)

}
catch(error){
    console.log(error)
}

})


// accessing usercont based on usid 

app.get('/get/:cred',async(req,res)=>{
    console.log("ddd")
const yu=req.params.cred;
console.log(yu)
try{
const response= await db.query(' SELECT userinfo.email_id,datas.content,datas.id from datas JOIN userinfo ON datas.userid=userinfo.id WHERE userid=$1',[yu])
res.json(response.rows);
console.log(response.rows)
}
catch(error){
console.log(error)
}



})
app.get('/get1/:del',async(req,res)=>{
    const id=req.params.del;
    console.log(id)
    try{
    const response=await db.query('DELETE FROM datas WHERE id=$1 ',[id])
    res.json(response);
console.log("check")
}
    
    catch(err){
        console.log(err)
    }
})



app.put('/edit/:id',async(req,res)=>{

const id=req.params.id;
console.log("edit options");
console.log(id)
try{
const response=  await  db.query('UPDATE datas SET content=$1 WHERE id=$2',[req.body.content,id])
res.json(response);

console.log("Updated")}
catch(error){

    console.log(error)
}

})





app.listen(port,()=>{

    console.log(`server is listening to ${port}`)
})