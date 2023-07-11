import React from "react";

function Events(props) {
    const {tableItems} = props

    return (<div className=' flex justify-center '>
        <div className='w-[95%] font-Quick'>
            <div className='flex justify-between my-3 items-center'>
                <h1 className='font-bold font-Quick text-white text-3xl '>List Of Events</h1>
                <h2 className='text-lg text-[#3599FF] cursor-pointer'>View all</h2>
            </div>
            <table className="min-w-full  ">
                <thead className='bg-[#DAF2F9] text-[#2e3748] text-xl font-bold' >
                <tr className=''>
                    <th className="py-4 pr-1 border-b">Event Name</th>
                    <th className="py-2 px-1 border-b">Description</th>
                    <th className="py-2 px-2 border-b">Location</th>
                    <th className="py-2 px-2 border-b">Date</th>
                    <th className="py-2 px-2 border-b">Start Time</th>
                    <th className="py-2 px-2 border-b">End Time</th>
                    <th className="py-2 px-2 border-b">No of Volunteers</th>
                    <th className="py-2 px-2 border-b">Tags</th>
                </tr>
                </thead>
                <tbody className='bg-[#2e3748] text-white '>
                {tableItems?.map((item) => (<tr className='hover:bg-[#DAF2F9] hover:text-[#2e3748] cursor-pointer' key={item.id}>
                    <td className="py-4 px-1 ">{item.eventName}</td>
                    <td className="py-2 px-1 ">{item.description}</td>
                    <td className="py-2 px-2 ">{item.location}</td>
                    <td className="py-2 px-2 ">{item.date}</td>
                    <td className="py-2 px-2 ">{item.startTime}</td>
                    <td className="py-2 px-2 ">{item.endTime}</td>
                    <td className="py-2 px-2 flex justify-center ">{item.numOfVolunteers}</td>
                    <td className="py-2 px-2 ">
                        {item.tags.map((tag) => (<span
                            key={tag}
                            className="inline-block bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm font-semibold mr-1"
                        >
                  {tag}
                </span>))}
                    </td>
                </tr>))}
                </tbody>
            </table>
        </div>

    </div>)
}

export default Events