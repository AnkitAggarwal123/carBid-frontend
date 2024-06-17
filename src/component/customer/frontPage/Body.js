// Body.js
import React, { useState } from "react";
import "./Body.css";
import PopUp from "../popUp/PopUp";

function Body() {
  const [showPopup, setShowPopup] = useState(false);

  const handleBidSubmit = () => {
    // Logic to handle bid submission
    setShowPopup(false); // Close the popup after submission
  };

  return (
    <div>
        <div className={`relative ${showPopup ? "blurred-bg" : ""}`}>
      <div className="auction">AUCTION</div>
      <div className="main">
        <div className="card">
          <img
            className="w-full h-40"
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
            alt="Car"
          />
          <div className="ml-3">Car Name: Ciaz</div>
          <div className="ml-3">Car no. DL-4s-89685</div>
          <div className="ml-3">Model No. 2015</div>
          <div className="mt-6 flex justify-center gap-2 w-full">
            <button className="bu bg-blue-500" type="button">
              See More
            </button>
            <button
              className="bu bg-red-800"
              type="button"
              onClick={() => setShowPopup(true)}
            >
              Your Bid
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="w-full h-40"
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
            alt="Car"
          />
          <div className="ml-3">Car Name: Ciaz</div>
          <div className="ml-3">Car no. DL-4s-89685</div>
          <div className="ml-3">Model No. 2015</div>
          <div className="mt-6 flex justify-center gap-2 w-full">
            <button className="bu bg-blue-500" type="button">
              See More
            </button>
            <button
              className="bu bg-red-800"
              type="button"
              onClick={() => setShowPopup(true)}
            >
              Your Bid
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="w-full h-40"
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
            alt="Car"
          />
          <div className="ml-3">Car Name: Ciaz</div>
          <div className="ml-3">Car no. DL-4s-89685</div>
          <div className="ml-3">Model No. 2015</div>
          <div className="mt-6 flex justify-center gap-2 w-full">
            <button className="bu bg-blue-500" type="button">
              See More
            </button>
            <button
              className="bu bg-red-800"
              type="button"
              onClick={() => setShowPopup(true)}
            >
              Your Bid
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="w-full h-40"
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
            alt="Car"
          />
          <div className="ml-3">Car Name: Ciaz</div>
          <div className="ml-3">Car no. DL-4s-89685</div>
          <div className="ml-3">Model No. 2015</div>
          <div className="mt-6 flex justify-center gap-2 w-full">
            <button className="bu bg-blue-500" type="button">
              See More
            </button>
            <button
              className="bu bg-red-800"
              type="button"
              onClick={() => setShowPopup(true)}
            >
              Your Bid
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="w-full h-40"
            src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
            alt="Car"
          />
          <div className="ml-3">Car Name: Ciaz</div>
          <div className="ml-3">Car no. DL-4s-89685</div>
          <div className="ml-3">Model No. 2015</div>
          <div className="mt-6 flex justify-center gap-2 w-full">
            <button className="bu bg-blue-500" type="button">
              See More
            </button>
            <button
              className="bu bg-red-800"
              type="button"
              onClick={() => setShowPopup(true)}
            >
              Your Bid
            </button>
          </div>
        </div>
        
      </div>
    </div>
    <div>{showPopup && <PopUp onClose={() => setShowPopup(false)} onSubmit={handleBidSubmit} />}</div>

    </div>

  );
}

export default Body;