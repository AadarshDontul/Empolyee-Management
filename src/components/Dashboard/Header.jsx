import { data } from 'autoprefixer'
import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{data.firstName} 👋</span></h1>
        <button className='text-lg font-medium bg-red-600 rounded px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header