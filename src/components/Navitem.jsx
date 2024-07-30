import React from 'react'
import { Link } from 'react-router-dom'

export const Navitem = () => {
  return (
    <div className='flex gap-12'>
        <Link className='hover:underline 'to='/'>Home</Link>
        <Link className='hover:underline ' to='/Men'>Men</Link>
        <Link className='hover:underline ' to='/Women'>Women</Link>
        <Link className='hover:underline ' to='/Genral'>Genral</Link>
    </div>
  )
}
