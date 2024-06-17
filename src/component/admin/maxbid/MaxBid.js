import React from 'react'





function MaxBid() {

    const data = [
        { id: 1, name: 'John Doe', phone: '123-456-7890', bidPrice: '$1000' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210', bidPrice: '$1500' },
        { id: 3, name: 'Michael Johnson', phone: '555-555-5555', bidPrice: '$2000' },
        { id: 4, name: 'Emma Brown', phone: '111-222-3333', bidPrice: '$2500' },
        { id: 5, name: 'David Lee', phone: '999-888-7777', bidPrice: '$3000' },
        { id: 6, name: 'Sarah Clark', phone: '333-444-5555', bidPrice: '$3500' },
        { id: 7, name: 'Chris Taylor', phone: '777-666-5555', bidPrice: '$4000' },
    ]

  return (
    <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Bid Table</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-800 text-white">
                    <th className="border border-gray-300 px-6 py-3 text-left">ID No.</th>
                    <th className="border border-gray-300 px-6 py-3 text-left">Name</th>
                    <th className="border border-gray-300 px-6 py-3 text-left">Phone No.</th>
                    <th className="border border-gray-300 px-6 py-3 text-left">Bid Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                        <td className="border border-gray-300 px-6 py-4">{row.id}</td>
                        <td className="border border-gray-300 px-6 py-4">{row.name}</td>
                        <td className="border border-gray-300 px-6 py-4">{row.phone}</td>
                        <td className="border border-gray-300 px-6 py-4">{row.bidPrice}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default MaxBid