import React, { useContext, useState } from 'react'
import { Datacontext } from './Datacontext'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const {data} = useContext(Datacontext)
    const navigate = useNavigate()

    const handlesubmit = (e) =>{
        e.preventDefault()
       
        let checkData = data.some(item => item.username === user && item.password === pass)
        console.log(checkData);
        if(checkData){
          navigate('/dashboard', {replace:true})
        }

        setUser('')
        setPass('')
    }

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='bg-white h-[500px] w-[400px] shadow-xl shadow-purple-400 rounded-2xl text-black px-10 py-13'>
        <p className='text-2xl font-bold mb-5 text-black flex justify-center py-2'>Log In</p>
        <form method="get" className='flex flex-col justify-between h-[350px]'>
            <div>
            <h4 className='font-bold mb-2'>Username</h4>
            <input value={user} onChange={(e)=>{setUser(e.target.value)}} className='border-2 border-purple-700 rounded-2xl p-2 w-full mb-5 ' type="text" />
            
            <h4 className='font-bold mb-2'>Password</h4>
            <input value={pass} onChange={(e)=>{setPass(e.target.value)}} className='border-2 border-purple-700 rounded-2xl p-2 w-full mb-5'  type="password" />
            </div>

            <button onClick={(e)=>{handlesubmit(e)}} className='bg-gray-800 border-2 border-purple-700 active:scale-95 text-white font-bold rounded-2xl w-full h-12'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
