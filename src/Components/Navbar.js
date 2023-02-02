import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='justify-around flex w-[100%] fixed bottom-0 pb-2 p-2 bg-white'>
      <Link to={'/'}><WhatshotIcon fontSize='large' color="primary" /></Link>
      <Link to={'/movies'}><MovieIcon fontSize='large' color="primary" /></Link>
      <Link to={'/series'}><LiveTvIcon fontSize='large' color="primary" /></Link>
      <Link to={'/search'}><SearchIcon fontSize='large' color="primary" /></Link>
    </div>
  )
}

export default Navbar