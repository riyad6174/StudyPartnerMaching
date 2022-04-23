import React,{useState,useEffect} from 'react'

import axios from 'axios'

function Profile() {
  const [data, setData] = useState('')
  const key =localStorage.getItem("key")
  useEffect(() => {
    
    axios({
        method: "GET",
        url: "http://localhost:4000/api/user/profile",
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'key':key
      }
      }).then((response)=>{
       
        setData(response.data)
      
      }).catch((err)=>{
          console.log(err)
      })
     
    

  // eslint-disable-next-line
    }, [])
  return (
 
    <>
      
    <div className='flex flex-col py-5'>
      <p className='text-3xl text-indigo-600'>Welcome {data.username}</p>
      <p> ID: {data.stdId}</p>
      
    </div>
      
      
      </>
  )
}

export default Profile