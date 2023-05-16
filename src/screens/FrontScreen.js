import React from "react";
import { useNavigate } from "react-router-dom";

const FrontScreen = () => {
  const navigate = useNavigate();
  const userType = () => {
    navigate("signup");
  };
  const transportType = () => {
    navigate("caradd");
  };
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <img
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80"
            alt="Loading..."
            height="700px"
            width="100%"
          />
        </div>
        <div className="col-md-4 py-5 text-center fw-bold fs-italic">
          <h1 className="text-center py-5">Welcome to Telicom Car App...</h1>
         <button className="btn btn-primary btn-lg my-2" onClick={userType}>
            Welcome
          </button>
        </div>
      </div>
    </>
  );
};

export default FrontScreen;
