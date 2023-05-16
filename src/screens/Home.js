import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbGet, getFBdata, userLogOut } from "../config/firebaseMethods";
const Home = () => {
  const navigate = useNavigate();
  const [model, setModel] = useState([]);
  const getCars = () => {
    getFBdata("cars")
      .then((res) => {
        setModel([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getCars, []);

  const booking = () => {
    navigate("signup");
  };
  const profile = () => {
    navigate("/profile");
  };
  const logOut = () => {
    userLogOut();
    navigate('/')
    alert('Logged Out Successfully')
  };
  const details = (x) => {
    // navigate('/cardetails', {state: {car: x.carname, details: x.details}})
    console.log(x);
  };
  // console.log(model)
  // const check = model.map((x,i)=>console.log(x))
  // console.log(check)
  return (
    <>
      <div>
        <input
          placeholder="You can search here..."
          className="w-75 px-5 py-2 m-2 rounded"
        />
        <button className="btn btn-primary rounded">Search</button>
        <button
          className="btn btn-primary m-2 rounded"
          onClick={profile}
        >
          My Profile
        </button>
        <button
          className="btn btn-primary rounded"
          onClick={logOut}
        >
          LogOut
        </button>
      </div>
      <div className="bg-muted container py-3">
        <h2 className="text-center fs-italic fw-bold display-3 text-dark py-3">
          Car Booking App
        </h2>
        <div className="row">
          {model.map((x, i) => (
            <div className="col-md-4 py-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={x.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    {x.carname} in {x.color} color
                  </h5>
                  <h6>Model : {x.model}</h6>
                  <p className="card-text">{x.details}</p>
                  <button className="btn btn-primary rounded" onClick={booking}>
                    Book Now
                  </button>
                  <button
                    className="btn btn-primary rounded mx-3"
                    onClick={() => details()}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
