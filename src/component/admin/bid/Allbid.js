import React from 'react'
import { Link } from 'react-router-dom';

function Allbid({change}) {
  return (
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
        <button className="bu bg-blue-500" type="button" onClick={()=>change("maxbid")}>
          See max bid
        </button>
        
        <button
          className="bu bg-red-800"
          type="button"
        >
          remove from list
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
        <button className="bu bg-blue-500" type="button" onClick={()=>change("maxbid")}>
          See max bid
        </button>
        
        <button
          className="bu bg-red-800"
          type="button"
        >
          remove from list
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
        <button className="bu bg-blue-500" type="button" onClick={()=>change("maxbid")}>
          See max bid
        </button>
        
        <button
          className="bu bg-red-800"
          type="button"
        >
          remove from list
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
        <button className="bu bg-blue-500" type="button" onClick={()=>change("maxbid")}>
          See max bid
        </button>
        
        <button
          className="bu bg-red-800"
          type="button"
        >
          remove from list
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
        <button className="bu bg-blue-500" type="button" onClick={()=>change("maxbid")}>
          See max bid
        </button>
        
        <button
          className="bu bg-red-800"
          type="button"
        >
          remove from list
        </button>
      </div>
    </div>
    
  </div>
  )
}

export default Allbid