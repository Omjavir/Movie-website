import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='justify-around flex w-[100%] fixed bottom-0 pb-2 p-2 bg-white'>
      <Link to={'/'}><WhatshotIcon className='ml-2' fontSize='large' color="primary" /><br /><p className='text-blue-500'>Trending</p></Link>
      <Link to={'/movies'}><MovieIcon className='ml-2' fontSize='large' color="primary" /><br /><p className='text-blue-500'>Movies</p></Link>
      <Link to={'/series'}><LiveTvIcon className='ml-5' fontSize='large' color="primary" /><br /> <p className='text-blue-500'>Web Series</p> </Link>
      <Link to={'/search'}><SearchIcon className='ml-1' fontSize='large' color="primary" /><br /><p className='text-blue-500'>Search</p></Link>
    </div>
  )
}

export default Navbar