import React from 'react'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router'
import About from './Pages/About'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='About' element={<About />} />
        <Route path='*' element={<NotFound />} />


      </Routes>





    </>
  )
}

export default App