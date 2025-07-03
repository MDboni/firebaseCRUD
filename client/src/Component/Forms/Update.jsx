import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'

const Update = () => {

    const [user,setUser] = useState({})
    const {id} =useParams()

     useEffect(()=>{
        fetch(`http://localhost:5000/faire/${id}`,{
            method:"GET"
        })
        .then(res => res.json())
        .then( data => {
            setUser(data);  
        })
    },[id])

    const UpdateHandel = e=>{

        e.preventDefault()
        const name = e.target.name.value
        const product = e.target.product.value
        const quantity = e.target.quantity.value
        const address = e.target.address.value
        const photo = e.target.photo.value
        const result ={name,product,quantity,photo,address}
        console.log(result);


    fetch(`http://localhost:5000/faire/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(result)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        alert("Coffee updated successfully!");
      }
    });


    }
   

  return (
    <Header>
    <form onSubmit={UpdateHandel} className="w-7/12 mx-auto grid grid-cols-2 gap-4 mt-8">
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Customer Name</legend>
                <input type="text" name="name" defaultValue={user.name} className="input w-full" placeholder="Enter Customer Name" />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Product Name</legend>
                <input type="text" name="product" defaultValue={user.product} className="input w-full" placeholder="Enter Product Name" />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Quantity</legend>
                <input type="number" name="quantity" defaultValue={user.quantity} className="input w-full" placeholder="Enter Quantity" />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Address</legend>
                <input type="text" name="address" defaultValue={user.address} className="input w-full" placeholder="Enter Address" />
            </fieldset>
            <fieldset className="fieldset w-full col-span-2">
                <legend className="fieldset-legend">Photo link</legend>
                <input type="text" name="photo" defaultValue={user.photo} className="input w-full" placeholder="Enter link" />
            </fieldset>
            <fieldset className="fieldset col-span-2 w-full">
                <legend className="fieldset-legend">Submit</legend>
                <input
                type="submit"
                value="Submit"
                className="bg-blue-500 text-white py-2 px-4 rounded w-full cursor-pointer hover:bg-blue-600 transition"
                />
      </fieldset>
      </form>
    </Header>
  )
}

export default Update