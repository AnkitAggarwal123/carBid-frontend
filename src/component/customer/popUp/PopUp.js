// PopUp.js
import React, { useState } from "react";

function PopUp({ onClose, onSubmit }) {
  const [bidAmount, setBidAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bidAmount);
    setBidAmount(""); // Clear the input after submission
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="text-lg font-bold mb-4">Place Your Bid</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="number"
            className="bg-gray-200 border-none p-3 mb-4 rounded"
            placeholder="Enter bid amount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            required
          />
          <div className="flex justify-between">
            <button
              className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-transform transform active:scale-95 mb-2"
              type="submit"
            >
              Submit
            </button>
            <button
              className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-transform transform active:scale-95 mb-2"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUp;