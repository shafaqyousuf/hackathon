import React, { useState } from "react";
import SMSwitch from "../../components/SMSwitch";
import { fbCustomPost, postFBdata } from "../../config/firebaseMethods";

const CarAdd = () => {
  const [model, setModel] = useState([]);
  const addCar = (model) => {
    postFBdata("cars", model)
      .then((res) => {
        alert('Car Details Added')
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(model)
  };
  return (
    <>
      <div className="container">
        <h1 className="py-3">Add Cars Here</h1>
        <input
          onChange={(e) => setModel({ ...model, carname: e.target.value })}
          type="text"
          name="carname"
          id="carname"
          placeholder="Car Name"
          className="rounded p-2 w-75 my-1"
        />
        <input
          onChange={(e) => setModel({ ...model, model: e.target.value })}
          type="text"
          name="model"
          id="model"
          placeholder="Enter Model"
          className="rounded p-2 w-75 my-1"
        />
        <input
          onChange={(e) => setModel({ ...model, color: e.target.value })}
          type="text"
          name="color"
          id="color"
          placeholder="Car color"
          className="rounded p-2 w-75 my-1"
        />
        <input
          onChange={(e) => setModel({ ...model, img: e.target.value })}
          type="text"
          name="img"
          id="img"
          placeholder="Image link"
          className="rounded p-2 w-75 my-1"
        />
        <input
          onChange={(e) => setModel({ ...model, details: e.target.value })}
          type="text"
          name="details"
          id="details"
          placeholder="Enter Details about car"
          className="rounded p-2 w-75 my-1"
        />
        <div>
          A.C :
          <SMSwitch
            onChange={(e) => setModel({ ...model, ac: e.target.checked })}
          />
        </div>
        <div>
          GPS :
          <SMSwitch
            onChange={(e) => setModel({ ...model, gps: e.target.checked })}
          />
        </div>
        <div>
          Bluetooth :
          <SMSwitch
            onChange={(e) =>
              setModel({ ...model, bluetooth: e.target.checked })
            }
          />
        </div>
        <div>
          USB Port :
          <SMSwitch
            onChange={(e) => setModel({ ...model, usbport: e.target.checked })}
          />
        </div>
        <button className="btn btn-primary rounded btn-lg" onClick={()=>addCar(model)}>
          Add
        </button>
      </div>
    </>
  );
};

export default CarAdd;
