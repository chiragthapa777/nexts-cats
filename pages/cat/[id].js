
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'

export default function cat() {
    const router=useRouter()
    const {id}=router.query
    const [cat, setCat]=useState(null)
    const fetchCat=async()=>{
        console.log(id);
        
        const response=await fetch(`/api/cats/${id}`)
        console.log(response);
        
        const data=await response.json();
        setCat(data)
    }
    useEffect(() => {
        fetchCat()
    }, [])
    
  return (
    <div>
        <Navbar />
        {
            cat &&
            (
                <div className='container mt-5 flex'>
                    <img src={cat.image.url} alt={cat.image.alt} />
                    <h1>{cat.name}</h1>
                    <p>{cat.description}</p>
                </div>
            )
        }
    </div>
  )
}
