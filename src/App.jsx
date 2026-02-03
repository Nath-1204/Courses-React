import React from 'react'
import Navbar from './components/Navbar'
import Citation from './components/Citation'
import Markdown from './components/Markdown'
import Drum_machine from './components/Drum_machine'
import Calculator from './components/Calculator'
import Horloge from './components/Horloge'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-gray-800'>
      <Navbar />
      <Citation />
      <Markdown />
      <Drum_machine />
      <Calculator />
      <Horloge />
      <Footer />                          
    </div>
  )
}

export default App
