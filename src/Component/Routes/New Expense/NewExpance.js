import React from "react";
import "./style.css";
const NewExpance = () => {
  return (
    <div className="container">
      <h3 className="text-center m-3">
        <strong>New Expance</strong>
      </h3>
      <div className="NE-box shadow p-3">
        <h4>Expense</h4>
        <div className="d-flex flex-row ">
          <div className="d-flex flex-column ms-5">
            <label form="name">Name:</label>
            <input type="text" placeholder="Name" className="input" />
          </div>
          <div className="d-flex flex-column ms-5">
            <label form="description">Description:</label>
            <input type="text" placeholder="Description" className="input" />
          </div>
          <div className="d-flex flex-column ms-5">
            <label form="price">Price:</label>
            <input type="text" placeholder="Price" className="input" />
          </div>
        </div>
      </div>
      <div className="w-25 m-5 d-flex flex-row justify-content-between">
        <button className="btn">save & continue</button>
        <button className="btn">cancel</button>
      </div>
    </div>
  );
};

export default NewExpance;
