import { useEffect } from "react"
import Header from "../Header/Header"
import { useState } from "react"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"

const User = () => {

  const [user,setUser] = useState([])
    
  useEffect(()=>{
    fetch('http://localhost:5000/users',{
      method:"GET"
    })
    .then(res => res.json())
    .then( data => {
      setUser(data);
    })
  },[])

  const DeletHandel = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            // UI থেকে ডিলিট করা ইউজার রিমুভ করো
            setUser(prev => prev.filter(u => u._id !== id));
          }
        });
    }
  });
};

  return (
    <Header>
        {user.length}
        <div className="w-8/12 mx-auto">
          <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>email</th>
                <th>Sign Up Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                user.map(item => (
                  <tr key={item._id}>
                    <th>1</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.signupTime}</td>
                    <td>
                      <button className="btn mr-1" onClick={() => DeletHandel(item._id)}>x</button>
                      <Link to={`/update/${item._id}`}><button className="btn">E</button></Link>
                    </td>
                 </tr>
                ))
              }
            </tbody>
          </table>
          </div>
        </div>
    </Header>
  )
}

export default User