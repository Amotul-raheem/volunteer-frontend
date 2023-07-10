import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Volunteer from "./components/Volunteer";

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path={"/"} element={<Home/>} />
              <Route path={"/user"} element={<Volunteer/>}/>
          </Routes>
      </Router>
  );
}

export default App;
