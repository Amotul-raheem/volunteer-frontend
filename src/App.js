import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Volunteer from "./components/Volunteer";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [volunteerEvents, setVolunteerEvents ] = useState([])

    useEffect(() => {
        async function getResults() {
            const results = await axios.get("https://t6i823sed9.execute-api.us-east-1.amazonaws.com/dev/events");
            setVolunteerEvents(results.data)
        }
        getResults()
    },[])
    return (
      <Router>
          <Routes>
              <Route exact path={"/"} element={<Home/>} />
              <Route path={"/user"} element={<Volunteer eventData={volunteerEvents}/>}/>
          </Routes>
      </Router>
  );
}

export default App;
