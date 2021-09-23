import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import About from './components/Pages/About';
import Register from './components/Pages/Register';

function App() {


  return (
    
    <div className="App">
      
      <Router>
        
         <NavBar /> 
          
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/register">
          <Register />
        </Route>       
      </Switch>
      
      </Router>
    </div>
    
  );
}

export default App;
