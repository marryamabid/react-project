import React, { useState ,useEffect} from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData()
    //  const [data,serData]=useState([])
    //  useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=> response.json())
    //     .then(data=>setData(data))
    //  },[])
    return(
        <>
         <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
        </>
    )
}
export  const githubFolderHandler=async()=>{
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}