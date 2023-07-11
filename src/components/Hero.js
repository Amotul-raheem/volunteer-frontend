import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
import {GrMail} from 'react-icons/gr';
import {MdClose} from 'react-icons/md';
import axios from "axios";


const availableTags = [
    'Environment',
    'Community',
    'Hunger',
    'Homelessness',
    'Education',
    'Youth',
    'Elderly',
    'Animals',
    'Health',
    'Arts and Culture',
    'Disaster Relief',
    'Women Empowerment',
    'LGBTQ+ Rights',
    'Sustainable Development',
    'Poverty Alleviation',
];

const url = "https://t6i823sed9.execute-api.us-east-1.amazonaws.com/dev/events"


function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        eventName: '',
        description: '',
        location: '',
        date: '',
        StarTime: '',
        endTime: '',
        numOfVolunteers: '',
        tags: [],
        otherRequirements: ''
    })

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleTagClick = (tag) => {
        setFormData((prevFormData) => ({
            ...prevFormData, tags: [...prevFormData.tags, tag],
        }));
    };

    const handleRemoveTag = (tag) => {
        setFormData((prevFormData) => ({
            ...prevFormData, tags: prevFormData.tags.filter((t) => t !== tag),
        }));
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData, [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleCloseModal()
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                    "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
                },
            });
            console.log(response)
        } catch (error) {
            console.log(error);
        }
        // Reset form values
        setFormData({
            eventName: '',
            description: '',
            tags: [],
            date: '',
            startTime: '',
            endTime: '',
            location: '',
            numOfVolunteers: '',
        })
    };

    return (<div className='w-screen flex justify-center items-center'>
            <div className='h-auto w-[90%] flex justify-between  my-12 '>
                <div onClick={handleOpenModal}
                     className='w-[55%] h-[250px] m-4 border-2 border-dashed border-white flex flex-col items-center justify-center rounded-lg cursor-pointer'>
                    <div className='bg-[#DAF2F9] h-12 w-12 rounded-full flex justify-center items-center m-5 '>
                        <AiOutlinePlus size={30}/>
                    </div>
                    <h2 className='text-white font-normal  text-2xl'>Create Event</h2>
                </div>
                <div
                    className='w-[45%] h-[250px] bg-[#DAF2F9] m-4 flex flex-col justify-center items-center rounded-lg shadow-2xl '>
                    <div
                        className='bg-white text-[#3599FF] h-14 w-14 rounded-full flex justify-center items-center m-3'>
                        <h2 className='font-Quick font-bold text-2xl'>BF</h2>
                    </div>
                    <h2 className='font-Quick text-2xl font-bold text-[#070E0E] m-2 '>Flourishing Future</h2>
                    <div className='flex items-center'>
                        <GrMail color={'#3599FF'}/>
                        <p className='p-1'>betterfuture@ngo.org</p>
                    </div>
                    <div className='flex items-center'>
                        <MdLocationOn color={'#3599FF'}/>
                        <p className='p-1'>Lagos State, Nigeria </p>
                    </div>
                </div>
            </div>
            {isOpen && (<div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white rounded-lg py-8 px-16 w-[40%] max-w-3xl h-[800px] overflow-y-auto ">
                    <div className='flex justify-between'>
                        <h1 className='text-3xl font-bold'>Create New Event</h1>
                        <MdClose onClick={handleCloseModal} size={25}/>
                    </div>
                    <form onSubmit={handleSubmit} className='my-6'>
                        <div className="mb-5">
                            <label htmlFor="eventName" className="block font-normal mb-2">
                                Event Name
                            </label>
                            <input
                                type="text"
                                name='eventName'
                                id="eventName"
                                className="w-full bg-[#F1F6FB]  rounded px-3 py-2 outline-0"
                                value={formData.eventName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="description" className="block font-normal mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="w-full bg-[#F1F6FB] rounded px-3 py-2 outline-0"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="location" className="block font-normal mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                name='location'
                                id="location"
                                className="w-full bg-[#F1F6FB]  rounded px-3 py-2 outline-0"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="numOfVolunteers" className="block font-normal mb-2">
                                Number of volunteers
                            </label>
                            <input
                                type="text"
                                name='numOfVolunteers'
                                id="numOfVolunteers"
                                className="w-full bg-[#F1F6FB]  rounded px-3 py-2 outline-0"
                                value={formData.numOfVolunteers}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="date" className="block font-normal mb-2">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="w-full  bg-[#F1F6FB] rounded px-3 py-2 outline-0"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex justify-between'>
                            <div className="mb-5 w-[48%]">
                                <label htmlFor="startTime" className="block font-normal mb-2">
                                    Start Time
                                </label>
                                <input
                                    type="time"
                                    id="startTime"
                                    name="startTime"
                                    className="w-full bg-[#F1F6FB] rounded px-3 py-2 outline-0"
                                    value={formData.startTime}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5 w-[48%]">
                                <label htmlFor="endTime" className="block font-normal mb-1">
                                    End Time
                                </label>
                                <input
                                    type="time"
                                    id="endTime"
                                    name="endTime"
                                    className="w-full bg-[#F1F6FB] rounded px-3 py-2 outline-0"
                                    value={formData.endTime}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tags" className="block font-normal mb-2">
                                Tags
                            </label>
                            <div className="flex flex-wrap">
                                {availableTags.map((tag) => (<button
                                    key={tag}
                                    type="button"
                                    className={`bg-blue-600 hover:bg-gray-500 text-white rounded-2xl px-3 py-2 mr-2 mb-2 ${formData.tags.includes(tag) ? 'bg-gray-500' : ''}`}
                                    onClick={() => handleTagClick(tag)}
                                >
                                    {tag}
                                </button>))}
                            </div>
                            <div className="mt-2">
                                {formData.tags.map((tag) => (<span
                                    key={tag}
                                    className="inline-block bg-gray-500 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2"
                                >{tag}
                                    <button
                                        type="button"
                                        className="ml-2 text-white font-semibold"
                                        onClick={() => handleRemoveTag(tag)}
                                    > x
                      </button>
                    </span>))}
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="otherRequirements" className="block font-normal mb-2">
                                Other Requirements
                            </label>
                            <textarea
                                id="otherRequirements"
                                name="otherRequirements"
                                className="w-full bg-[#F1F6FB] rounded px-3 py-2 outline-0"
                                value={formData.otherRequirements}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#2e3748] hover:bg-blue-600 text-white rounded-xl px-4 py-2 mx-3"
                            >
                                Create Event
                            </button>
                            <button
                                type="button"
                                className="ml-2 text-gray-500 border border-gray-500 rounded-xl px-4 hover:text-gray-600"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
            </div>)

            }
        </div>

    )
}

export default Hero