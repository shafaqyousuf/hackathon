import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState([
    {
      name: "car",
      src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80",
      details:
        "Some quick example text to build on the card title and make up the bulk of the cards content",
    },
  ]);
  const carDetails = (x) => {
    navigate("cardetails");
    console.log(x);
  };
  return (
    <>
      <div className="bg-muted container">
        <h2 className="text-center fs-italic fw-bold display-3 text-danger py-3">
          Car Booking App
        </h2>
        <div className="row">
          <div className="col-md-4" onClick={() => carDetails()}>
            <div className="card" style={{ width: "18rem" }}>

                // console.log(x)
                <div>
                  <img src={x.src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{x.name}</h5>
                    <p className="card-text">{x.details}</p>
                    <button className="btn btn-primary rounded">
                      Book Now
                    </button>
                  </div>
                </div>;
              })}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Car Name</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary rounded">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Car Name</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn btn-primary rounded">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
