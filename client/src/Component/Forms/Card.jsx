import Swal from "sweetalert2";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { _id, name, product, quantity, photo, address } = item;

  const DeleteHAndel = (_id) => {
    // swal confirm
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/faire/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <h2>{name}</h2>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body flex flex-row">
          <div>
            <h2 className="card-title">{product}</h2>
            <p>Quantity: {quantity}</p>
            <p>Address: {address}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical gap-2">
              <Link to={`/update/${item._id}`}>
                <button className="btn join-item">Update</button>
              </Link>
              <button className="btn join-item">See</button>
              <button
                className="btn join-item"
                onClick={() => DeleteHAndel(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
