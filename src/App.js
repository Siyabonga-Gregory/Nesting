import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import Navbar from './components/Navbar';
import Course from './components/Course';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          <switch>
              <Route exact path="/">
                <div>Home</div>
              </Route>
              <Route path="/course">
               <Course/>
              </Route>
          </switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
