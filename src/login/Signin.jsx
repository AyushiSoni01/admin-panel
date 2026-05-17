import React, { useContext, useEffect, useState } from 'react'
import { Datacontext } from './Datacontext'
import { replace, useNavigate } from 'react-router-dom'

const Signin = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {data, setData} = useContext(Datacontext)
    const [signedin, setSignedin] = useState(false)
    const navigate = useNavigate()

    const handlesubmit = (e) =>{
        e.preventDefault();

         if(!username || !email || !password){
        alert("All fields are required!");
        return;
    }

        setData([{'username':username, 'email':email, 'password':password}])  
        
        setUsername('')
        setEmail('')
        setPassword('')
    }

    useEffect(()=>{
        if(data.length>0){
            localStorage.setItem("signedin", "true")
            navigate('/', {replace: true})
        }
    },[data])

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='bg-white h-[500px] w-[400px] shadow-xl shadow-purple-400 rounded-2xl text-black px-10 py-10'>
        <p className='text-2xl font-bold mb-5 text-black flex justify-center py-2'>Sign In</p>
        <form method="get" className='flex flex-col justify-between h-[350px]'>
            <div>
                <h4 className='font-bold mb-1'>Username</h4>
            <input onChange={(elem)=>{
                setUsername(elem.target.value)               
                
            }} value={username} className='border-2 border-purple-700 rounded-xl p-1 w-full mb-2 ' type="text" />

            <h4 className='font-bold mb-1'>Email</h4>
            <input onChange={(elem)=>{
                setEmail(elem.target.value)
            }} value={email} className='border-2 border-purple-700 rounded-xl p-1 w-full mb-2 ' type="email" />

            <h4 className='font-bold mb-1'>Password</h4>
            <input onChange={(elem)=>{
                setPassword(elem.target.value)
            }} value={password} className='border-2 border-purple-700 rounded-xl p-1 w-full '  type="password" />
            </div>

            <button onClick={(e)=>{
                handlesubmit(e)
            }} className='bg-gray-800 border-2 border-purple-700 active:scale-95 text-white font-bold rounded-2xl w-full h-12'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Signin
