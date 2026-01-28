import React from 'react'
import Navbar from './components/Navbar'
import Citation from './components/Citation'
import Markdown from './components/Markdown'
import Drum_machine from './components/Drum_machine'
import Calculator from './components/Calculator'
import Horloge from './components/Horloge'

const App = () => {
  return (
    <div className='bg-gray-950'>
      <Navbar />
      <Citation />
      <Markdown />
      <Drum_machine />
      <Calculator />
      <Horloge />
    </div>
  )
}

export default App
