import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const CarDetail = () => {
  const { state } = useLocation();
  const { car, details } = state;
  console.log(car, details);
  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80"
          className="card-img-top"
          alt="..."
        />
        <h2>car name</h2>
        <h3>car model</h3>
      </div>
    </>
  );
};

export default CarDetail;
