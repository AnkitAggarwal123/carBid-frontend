import React, { useState } from 'react';
import AllUsers from '../allUser/AllUsers';
import Allbid from '../bid/Allbid';
import AddCar from '../addCar/AddCar';
import MaxBid from '../maxbid/MaxBid';

function MainPane() {
    const [side, setSide] = useState("");

    function change(option) {
        setSide(option);
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <div className='bg-black h-20 flex items-center'>
                <p className='text-white italic font-bold ml-8 text-3xl'>BidCar India</p>
                <p className='text-white ml-auto mr-8'>Admin Panel</p>
            </div>

            {/* Content */}
            <div className='flex justify-center pt-8'>
                {/* Sidebar */}
                <div className='bg-gray-800 text-white w-60 h-screen py-4 shadow-md'>
                    <div className='text-center text-lg font-semibold mb-4'>Menu</div>
                    <div className='cursor-pointer px-4 py-2 hover:bg-gray-700' onClick={() => change("user")}>All Users</div>
                    <div className='cursor-pointer px-4 py-2 hover:bg-gray-700' onClick={() => change("bid")}>Bid</div>
                    <div className='cursor-pointer px-4 py-2 hover:bg-gray-700' onClick={() => change("car")}>Add Car</div>
                </div>

                {/* Main Content */}
                <div className='ml-8 flex-grow'>
                    {side === "user" && <AllUsers />}
                    {side === "bid" && <Allbid change = {change} />}
                    {side === "car" && <AddCar />}
                    {side === "maxbid" && <MaxBid/>}
                </div>
            </div>
        </div>
    );
}

export default MainPane;