import { useState } from "react"
import { useEffect } from "react"
import Card from "./Card"

const Read = () => {
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/faire',{
            method:"GET"
        })
        .then(res => res.json())
        .then( data => setUser(data))
    },[])

  return (
    <div>
        {
            user.length
        }
        <div className="grid grid-cols-2 w-8/12 mx-auto gap-3">
            {
            user.map( item => (<Card key={item._id} item={item}></Card>))
        }
        </div>
    </div>
  )
}

export default Read