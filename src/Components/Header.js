import React from 'react'

const Header = () => {
  return (
    <div onClick={() => { window.scroll(0, 0) }} style={{ scrollBehavior: 'smooth' }} className='cursor-pointer text-2xl scroll-smooth py-4 pb-4 shadow-md sm:text-4xl w-[100%] fixed bg-white'>
      <h1 className='pl-10 font-bold'>Warner Bros <b className='mx-1 text-blue-500'>Entertainment</b></h1>
    </div>
  )
}

export default Header