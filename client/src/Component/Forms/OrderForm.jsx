const OrderForm = () => {

    const FHandel= e=>{
        e.preventDefault()

        const name = e.target.name.value
        const product = e.target.product.value
        const quantity = e.target.quantity.value
        const address = e.target.address.value
        const photo = e.target.photo.value
        const result ={name,product,quantity,photo,address}
        console.log(result);
        
        fetch('http://localhost:5000/faire',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(result)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("User created successfully:", data);
            })
    }

  return (

    <form onSubmit={FHandel} className="w-7/12 mx-auto grid grid-cols-2 gap-4 mt-8">
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Customer Name</legend>
        <input type="text" name="name" className="input w-full" placeholder="Enter Customer Name" />
      </fieldset>
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Product Name</legend>
        <input type="text" name="product" className="input w-full" placeholder="Enter Product Name" />
      </fieldset>
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Quantity</legend>
        <input type="number" name="quantity" className="input w-full" placeholder="Enter Quantity" />
      </fieldset>
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Address</legend>
        <input type="text" name="address" className="input w-full" placeholder="Enter Address" />
      </fieldset>
      <fieldset className="fieldset w-full col-span-2">
        <legend className="fieldset-legend">Photo link</legend>
        <input type="text" name="photo" className="input w-full" placeholder="Enter link" />
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

  );
};

export default OrderForm;
