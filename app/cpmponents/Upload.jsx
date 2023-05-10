'use client'


import { useState } from "react";
import React from "react";
import axios from 'axios';
const Upload = () => {
  const [isenabled,setisenabled] = useState(false)
  const [price,setprice]= useState('')

  const [file, setFile] = useState()
  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    setisenabled(true)
    const url = '/api/images';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then(async (response) => {
      console.log(response.data.doc.id);

      const res = await fetch('/api/posts', 
      {method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        price:price,
        image: response.data.doc.id,
        
      }),
  
      })
      const data = await res.json();
      alert(data.message? "Submission Successful" : "Please fill all the input and try again!");
      setisenabled(false)
    });

  }


  return (
    <div>
      <div className="my-0 mx-auto bg-white h-36 w-96 rounded-3xl flex flex-col">
      <form onSubmit={handleSubmit} className='block'>
        <input onChange={handleChange} type='file' className="bg-purple-600  rounded-3xl text-white text-xs h-5 w-20 mt-4 ml-72 "></input>
        <div className=" flex flex-row gap-4">
          <img src="/assets/dp.png" alt="" className=" w-12 ml-10 " />
          <input onChange={(val=>{
                //console.log(val.target.value)
                setprice(val.target.value)
               })}  type="text" className="outline-none" placeholder="price"/>
     
        </div>

        <div className=" flex flex-row gap-4 relative  ">
          {/* <button className=" bg-gray-400  rounded-3xl text-black text-xs h-5 w-14 mt-8 ml-8 ">
            Paid
          </button>
          <button className="bg-black  rounded-3xl text-white text-xs h-5 w-14 mt-8  ">
            Free
          </button> */}

          
          <button type="submit" className='bg-purple-600  rounded-3xl text-white text-xs h-5 w-14 mt-8 ml-8 ' disabled={isenabled}>Post</button>

          


          
        </div>
        </form>
      </div>
    
    </div>
  );
};

export default Upload;
