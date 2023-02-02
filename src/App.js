import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Movies from './Pages/Movies'
import Search from './Pages/Search'
import Series from './Pages/Series'
import Trending from './Pages/Trending'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className=''>
      <Header />
      <div className="justify-center flex mx-2 pt-20">
        <Routes>
          <Route path='/' exact element={<Trending />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  )
}

export default App