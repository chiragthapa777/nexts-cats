import React, { useState, useEffect } from 'react'
import Card from '../../components/card/Card'
import Navbar from '../../components/navbar/Navbar'



export default function cats() {

  const [cats,setCats]=useState([])

const fetchCats=async()=>{
  const response=await fetch('/api/cats')
  const data=await response.json()
  setCats(data)
}

useEffect(() => {
  fetchCats()
}, [])


  return (
      <div>
        <Navbar />
        <div className="cats">
        {
          cats.length>0 &&
          cats.map(cat=>{
            return(
              <Card 
              name={cat.name}
              id={cat.id}
              email={cat.email}
              phone={cat.phone}
              image={cat.image}
            />
            )
            
          })
        }

        </div>
    </div>
  )
}
