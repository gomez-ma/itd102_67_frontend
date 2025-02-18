import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Nooooo");
      });
  }, []);

  return (
    <>
      <div className="container text-center">
        <h1>Users Management</h1>
        <Link to="/create-user" className="btn btn-primary btn-sm mb-3">
          Create New
        </Link>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>
                <Link className="btn btn-warning btn-sm" to={`/edit-user/${item.id}`}>Edit</Link>
                {" "}
                <Link className="btn btn-danger" to="#">Delete</Link>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Home;
