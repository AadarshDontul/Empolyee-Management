import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-700'>
          <form className='flex flex-col items-center justify-center' action="">
            <input type="email" placeholder='Enter your email'/>
            <input type="password" placeholder='Enter password'/>
          </form>
        </div>
    </div>
  )
}

export default Login