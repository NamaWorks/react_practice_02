
import { useEffect, useState } from 'react'
import './App.css'
import Character from './components/Character'

function App() {

  const [charList, setCharList] = useState([])

  useEffect(()=> {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((jsonResponse)=> setCharList(jsonResponse.results))
  },[])



  return (
    <div>
      <h1>Characters:</h1>
      <ul>
        {
          charList.map((character, index)=> 
            <Character key={index} image={character.image} name={character.name}/>
          )
        }
        </ul>
      
    </div>
  )
}

export default App
