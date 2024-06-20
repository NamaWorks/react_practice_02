
import { useState } from 'react'
import './App.css'
import Character from './components/Character'

function App() {
  return (
    <div>
      <h1>Characters:</h1>
      <Character 
        name="choripanes en salsa detomate"
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        />
    </div>
  )
}

export default App
