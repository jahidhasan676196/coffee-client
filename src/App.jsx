
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Card from './Components/Card'

function App() {
  const [users,setUser]=useState([])
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
    <Header></Header>

      {/* <p>{users.length}</p> */}
      <h3 className='my-6 text-4xl'>Our Popular Products</h3>
    <div className='mt-20 grid grid-cols-2 mx-20 gap-6'>
      {
        users.map(user=><Card user={user}></Card>)
      }
    </div>
    </>
  )
}

export default App
