import React, { useEffect, useState } from "react";
import { checkAuth, fbGet, getFBdata } from "../config/firebaseMethods";

const Profile = () => {
  const [model, setModel] = useState({});
  const getData = () => {
    getFBdata("users")
      .then((res) => {
        console.log(res);
        // setModel([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getData, []);
  console.log(model);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 bg-danger m-3">
            <h1>Profile</h1>
          
          </div>
          <div className="col-md-6 bg-danger m-3">

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
