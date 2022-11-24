import React from "react";
import { CiImport } from "react-icons/ci";
import { FcSearch } from "react-icons/fc";
import "./style.css";
const PSO = () => {
  return (
    <div className="container">
      <h3 className="text-center m-4">
        <strong>Point Of Sell</strong>
      </h3>

      <div className="m-box">
        <div className="box-1 shadow">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="box-2 shadow">
          <h5>Selected Items</h5>
          <div className="m-3 d-flex flex-row justify-content-between  ">
            <div className="">
              {" "}
              <FcSearch />
              <input className="input-items" placeholder="Search..." />
            </div>
            <div>
              <CiImport className="h4" />
            </div>
          </div>
          <p>There are no records to display</p>
          <div className="d-flex flex-column">
            <label form="Name">Name:</label>
            <input type="text" className="input" placeholder="Customer Name" />
          </div>
          <p>Total:0</p>
          <button className="btn">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default PSO;
