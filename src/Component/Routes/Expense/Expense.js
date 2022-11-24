import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Expense = () => {
  const navagate = useNavigate();
  return (
    <div className="container">
      <h3 className="text-center m-4">
        <strong>Expense</strong>
      </h3>
      <div className="d-flex flex-row justify-content-between">
        <div></div>
        <button
          className="btn"
          onClick={() => {
            navagate("/new/expense");
          }}
        >
          Add New
        </button>
      </div>
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
  );
};

export default Expense;
