
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user,setUser]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/coffeeData')
    .then(res=>res.json())
    .then(data=>{
      setUser(data)
      console.log(data);
    })
  },[])

  return (
    <>
      <p>{user.length}</p>
    </>
  )
}

export default App
