import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    handleLogin(email,password)
    console.log("Form submitted")
    
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}
           className='flex flex-col items-center justify-center' action="">
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }} 
            required className='outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5  text-white placeholder:text-gray-300' type="email" placeholder='Enter your email'/>
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required className='outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 mt-3 text-white placeholder:text-gray-300' type="password" placeholder='Enter password'/>
            <button className='w-full outline-none border-none font-semibold bg-emerald-600 text-xl rounded-full py-3 px-5 mt-5 text-white placeholder:text-white'>Log in</button>
          </form>
        </div>
    </div>
  )
}

export default Login