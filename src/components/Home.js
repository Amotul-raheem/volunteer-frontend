import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Events from "./Events";
import Volunteer from "./Volunteer";
import axios from "axios";


function Home() {
    const [volunteerEvents, setVolunteerEvents ] = useState([])

    useEffect(() => {
        async function getResults() {
            const results = await axios.get("https://q9hxtzktk0.execute-api.us-east-1.amazonaws.com/dev/events");
            setVolunteerEvents(results.data)
            console.log("hello")
        }
    },[volunteerEvents])


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