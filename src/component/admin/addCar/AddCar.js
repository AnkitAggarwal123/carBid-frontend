import React, { useState } from 'react';

function AddCar() {
    // State variables to hold input values
    const [carName, setCarName] = useState('');
    const [modelNumber, setModelNumber] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [ownerName, setOwnerName] = useState('');

    // Function to handle form submission
    const handleSubmit = async(e) => {
      e.preventDefault()

      const formData = new FormData();
      formData.append('carName', carName);
      formData.append('modelNumber', modelNumber);
      formData.append('registrationNumber', registrationNumber);
      formData.append('ownerName', ownerName);
      // formData.append('carPhoto', carImage);

      try {
          const response = await fetch('http://localhost:8080/car', {
              method: 'POST',
              body: formData
          });

          if (response.ok) {
              // Reset form fields after successful submission
              setCarName('');
              setModelNumber('');
              setRegistrationNumber('');
              setOwnerName('');
              alert('Car added successfully!');
          } else {
              alert('Failed to add car');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while adding the car');
      }

    };

    // // Function to handle file input change
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     // Optional: You can handle file validation here (size, type, etc.)
    //     setCarImage(file);
    // };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Add Car</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Car Name */}
                <div>
                    <label htmlFor="carName" className="block text-sm font-medium text-gray-700">Car Name</label>
                    <input
                        type="text"
                        id="carName"
                        value={carName}
                        onChange={(e) => setCarName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                {/* Model Number */}
                <div>
                    <label htmlFor="modelNumber" className="block text-sm font-medium text-gray-700">Model Number</label>
                    <input
                        type="text"
                        id="modelNumber"
                        value={modelNumber}
                        onChange={(e) => setModelNumber(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                {/* Registration Number */}
                <div>
                    <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">Registration Number</label>
                    <input
                        type="text"
                        id="registrationNumber"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                {/* Owner Name */}
                <div>
                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Name</label>
                    <input
                        type="text"
                        id="ownerName"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                {/* Car Image */}
                {/* <div>
                    <label htmlFor="carImage" className="block text-sm font-medium text-gray-700">Car Image</label>
                    <input
                        type="file"
                        id="carImage"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        
                    />
                </div> */}

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddCar;