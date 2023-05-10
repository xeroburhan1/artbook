'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


function page() {
    const { push } = useRouter();

    const [email,setemail] = useState('')
    const [passwd,setpasswd]= useState('')


    const login = async () =>{

        console.log(email)

        const response = await fetch('/api/customers/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "email": `${email}`, "password": `${passwd}` })
        });
    
        const data = await response.json();
        console.log(data);
        if(data.token){
          push('/');

        }else{
          alert("user or passwd is wrong");
        }
        
    
    }


  return (
    
    <div className="main bg-gradient-to-r rounded-t-3xl from-background1 to-background2 w-full h-screen ">
         
    <div className=" flex items-center justify-center pt-20">
     <img src="/assets/Group 14.png" alt="" className=" h-24"/><br/>
     

    </div>

    <div className=" flex items-center justify-center pt-10 -ml-20" >
     <span className=" text-2xl font-bold">Please login to enter</span>
    </div>

    <div className=" flex items-center justify-center pt-10 -ml-20" >
     <input onChange={(val=>{
                //console.log(val.target.value)
                setemail(val.target.value)
               })}  type="text" className=" h-16 w-96 rounded-full placeholder: text-2xl pl-5 " placeholder="Email" />
     
    </div>
    <div className=" flex items-center justify-center pt-10 -ml-20" >
     <input onChange={(val=>{
                //console.log(val.target.value)
                setpasswd(val.target.value)
               })}  type="text" className=" h-16 w-96 rounded-full placeholder: text-2xl pl-5 " placeholder="Password"/>
     
    </div>
  

      <div className=" flex items-center justify-center pt-10 -ml-20">
         <button onClick={()=>{
                  login()
                }} className=" bg-white w-36 h-16 text-2xl pr-8 rounded-full">Login</button>
         <button className=" bg-white w-36 h-16 text-2xl ml-6 rounded-full  ">sign up</button>
      </div>
          
         
          
         
           </div>

    
  )
}

export default page