import React from 'react';

function AllUsers() {
    const data = [
        { sno: 1, name: 'John Doe', phone: '123-456-7890', timeOfRegistration: '2024-06-17 10:30 AM' },
        { sno: 2, name: 'Jane Smith', phone: '987-654-3210', timeOfRegistration: '2024-06-16 03:45 PM' },
        { sno: 3, name: 'Michael Johnson', phone: '555-555-5555', timeOfRegistration: '2024-06-15 11:15 AM' },
        { sno: 4, name: 'Emma Brown', phone: '111-222-3333', timeOfRegistration: '2024-06-14 09:00 AM' },
        { sno: 5, name: 'David Lee', phone: '999-888-7777', timeOfRegistration: '2024-06-13 01:20 PM' },
        { sno: 6, name: 'Sarah Clark', phone: '333-444-5555', timeOfRegistration: '2024-06-12 04:30 PM' },
        { sno: 7, name: 'Chris Taylor', phone: '777-666-5555', timeOfRegistration: '2024-06-11 08:45 AM' },
    ];

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">All Users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="border border-gray-300 px-6 py-3 text-left">Sno.</th>
                            <th className="border border-gray-300 px-6 py-3 text-left">Name</th>
                            <th className="border border-gray-300 px-6 py-3 text-left">Phone</th>
                            <th className="border border-gray-300 px-6 py-3 text-left">Time of Registration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="border border-gray-300 px-6 py-4">{row.sno}</td>
                                <td className="border border-gray-300 px-6 py-4">{row.name}</td>
                                <td className="border border-gray-300 px-6 py-4">{row.phone}</td>
                                <td className="border border-gray-300 px-6 py-4">{row.timeOfRegistration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllUsers;