import React, {useState} from "react";
import axios from "axios";


const availableTags = ['Environment', 'Community', 'Hunger', 'Homelessness', 'Education', 'Youth', 'Orphans', 'Sport', 'Climate'];
const url = "https://q9hxtzktk0.execute-api.us-east-1.amazonaws.com/dev/users"

function Volunteer(props) {
    const {eventData} = props
    const [showEvents, setShowEvents] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tags: [],
        sendNotification: false,
        selectedEvents:[]
    })

    const handleTagClick = (tag) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            tags: [...prevFormData.tags, tag],
        }));
        setShowEvents(true); // Show events when a filter is clicked

    };

    const handleRemoveTag = (tag) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            tags: prevFormData.tags.filter((t) => t !== tag),
        }));
    };

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        if (type === 'checkbox') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: checked,
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: newValue,
            }));
        }
    };


    const handleTagChange = (tag) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            tags: prevFormData.tags.includes(tag)
                ? prevFormData.tags.filter((t) => t !== tag)
                : [...prevFormData.tags, tag],
        }));
        setShowEvents(true); // Show events when a filter is clicked
    };


    const handleEventSelect = (event) => {
        const isSelected = formData["selectedEvents"].includes(event);
        setFormData((prevFormData) =>({
            ...prevFormData,
            selectedEvents:isSelected
            ? prevFormData.selectedEvents.filter((e) => e !== event)
            : [...prevFormData.selectedEvents, event]
        })
        );
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, formData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        // Perform form submission logic
        console.log('Form submitted');
        console.log(formData)
        setFormData({
            name: '',
            email: '',
            tags: [],
            sendNotification: false,
            selectedEvents: []
        })
    }

    const filteredEvents = eventData?.filter((event) => {
            return formData.tags.some((tag) => event.tags.includes(tag));
        }
    );


    return (
        <div className='bg-screen bg-cover h-screen   '>
            <div className='flex justify-center items-center h-screen bg-gray-900 bg-opacity-70 '>
                <div
                    className="bg-white rounded-lg py-8 px-12 w-[40%] max-w-3xl h-[700px] max-h-[900px] overflow-y-auto relative ">
                    <h1 className='text-3xl font-bold'>Create Profile</h1>
                    <form onSubmit={handleSubmit} className='my-8'>
                        <div className="mb-6">
                            <label htmlFor="eventName" className="block font-normal mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                id="name"
                                className="w-full bg-[#F1F6FB]  rounded px-3 py-3 outline-0"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="eventName" className="block font-normal mb-3">
                                Email Address
                            </label>
                            <input
                                type="text"
                                name='email'
                                id="email"
                                className="w-full bg-[#F1F6FB]  rounded px-3 py-3 outline-0"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="tags" className="block font-normal text-lg mt-8 mb-4">
                                Tags
                            </label>
                            <div className="flex flex-wrap">
                                {availableTags.map((tag) => (<button
                                    key={tag}
                                    type="button"
                                    className={`bg-blue-600 hover:bg-gray-500 text-white rounded-2xl px-3 py-2 mr-2 mb-1 ${formData.tags.includes(tag) ? 'bg-gray-500' : ''}`}
                                    onClick={() => handleTagClick(tag)}
                                    checked={formData.tags.includes(tag)}
                                    onChange={() => handleTagChange(tag)}
                                >
                                    {tag}
                                </button>))}
                            </div>
                            <div className="mt-2">
                                {formData.tags.map((tag) => (
                                    <span
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
                        <div className="my-4 flex items-center">
                            <input
                                type="checkbox"
                                name="sendNotification"
                                className='mx-2'
                                checked={formData.sendNotification}
                                onChange={handleInputChange}
                            />
                            <label className="block font-normal mb-1">
                                Send me a notification if there is any event with this tag(s)
                            </label>

                        </div>

                        {showEvents && filteredEvents.length > 0 && (
                            <div className="mb-4 mt-8">
                                <label className="block font-semibold text-xl mb-2">Available Events</label>
                                {filteredEvents.map((event) => (
                                    <button
                                        key={event.id}
                                        type="button"
                                        className={`w-full flex flex-col  border border-gray-300 rounded-2xl px-3 py-2 mb-2 ${
                                            formData["selectedEvents"].includes(event) ? 'bg-green-500 text-white' : ''
                                        }`}
                                        onClick={() => handleEventSelect(event)}
                                    >
                                        <p className="font-semibold">{event.eventName}</p>
                                        <p className='text-start'>. {event.description}</p>
                                        <p>. Location: {event.location}</p>
                                        <p>. Date: {event.date}</p>
                                        <p>. Time: {event.time}</p>
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className="flex justify-end mt-14 mb-8">
                            <button
                                type="submit"
                                className="bg-[#2e3748] hover:bg-blue-600 text-white rounded-xl px-6 py-3 mx-3"
                            >
                                Sign Up
                            </button>
                            <button
                                type="button"
                                className="ml-2 text-gray-500 border border-gray-300 rounded-xl py-3 px-6 hover:text-gray-600"
                                // onClick={''}
                            >
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )

}

export default Volunteer