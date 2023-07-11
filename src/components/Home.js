import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Events from "./Events";
import axios from "axios";




function Home() {

    const [volunteerEvents, setVolunteerEvents ] = useState([])

    useEffect(() => {
        async function getResults() {
            const results = await axios.get("https://t6i823sed9.execute-api.us-east-1.amazonaws.com/dev/events");
            setVolunteerEvents(results.data)
        }
        getResults()
    },[volunteerEvents])


    return(
        <div>
            <NavBar/>
            <Hero/>
            <Events tableItems={volunteerEvents}/>
        </div>
    )

}

export default Home