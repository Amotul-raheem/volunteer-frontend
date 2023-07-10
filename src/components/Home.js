import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Events from "./Events";
import Volunteer from "./Volunteer";

const volunteerEvents = [
    {
        id: 1,
        eventName: 'Beach Cleanup',
        description: 'Join us for a community beach cleanup event.',
        location: 'Beachfront Park',
        date: '2023-07-15',
        startTime: '10:00 AM',
        endTime: '2:00 PM',
        numVolunteers: 20,
        tags: ['Environment', 'Community'],
    },
    {
        id: 2,
        eventName: 'Food Drive',
        description: 'Help collect and distribute food items for the local food bank.',
        location: 'Town Center Mall',
        date: '2023-07-20',
        startTime: '10:00 AM',
        endTime: '2:00 PM',
        numVolunteers: 15,
        tags: ['Hunger', 'Community'],
    },
    {
        id: 3,
        eventName: 'Homeless Shelter Assistance',
        description: 'Assist at a local homeless shelter by serving meals and providing support.',
        location: 'Hope Shelter',
        date: '2023-07-25',
        startTime: '10:00 AM',
        endTime: '2:00 PM',
        numVolunteers: 10,
        tags: ['Homelessness', 'Community'],
    },
    {
        id: 4,
        eventName: 'Educational Workshop',
        description: 'Lead an educational workshop for underprivileged students.',
        location: 'Youth Center',
        date: '2023-07-30',
        startTime: '10:00 AM',
        endTime: '2:00 PM',
        numVolunteers: 8,
        tags: ['Education', 'Youth'],
    },
    {
        id: 5,
        eventName: 'Homeless Shelter Assistance',
        description: 'Assist at a local homeless shelter by serving meals and providing support.',
        location: 'Hope Shelter',
        date: '2023-07-25',
        startTime: '10:00 AM',
        endTime: '2:00 PM',
        numVolunteers: 10,
        tags: ['Homelessness', 'Community'],
    },
    {
        id: 6,
        eventName: 'Food Drive',
        description: 'Help collect and distribute food items for the local food bank.',
        location: 'Town Center Mall',
        date: '2023-07-20',
        startTime: '10:00 AM',
        endTime: '2:00 PM',
        numVolunteers: 15,
        tags: ['Hunger', 'Community'],
    },
];
function Home() {
    return(
        <div>
            <NavBar/>
            <Hero/>
            <Events tableItems={volunteerEvents}/>
            {/*<Volunteer eventData={volunteerEvents}/>*/}
        </div>
    )

}

export default Home