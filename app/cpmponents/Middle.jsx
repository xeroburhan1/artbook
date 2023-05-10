"use client"
import React from "react";
import Upload from "./Upload";
import Postcard from "./Postcard";
import { useEffect } from "react";
import { useState } from "react";

const Middle = () => {
  let [post, setpost] = useState(null)

   
  useEffect(() => {
    fetch("/api/posts")
    .then(response => response.json())
    .then(data => {
      
      setpost(data)})
      console.log(post)
  },[])
  

  return (
    <div className="">
    <div className="flex-1 flex-col gap-3 " >
      <Upload />
      {post===null?'':post.docs.map((post,index)=>{
                return (
                   
                  <Postcard key={index} data={post} />
                
              )}
              
              )
     }
      
      
      
    </div>
    </div>
  );
};

export default Middle;
