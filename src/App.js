import React from 'react';
import Header from './components/header';
import Container from './components/container';
import Footer from './components/footer';
import About from './components/about';
import People from './components/people';
import TotalInfoPerson from './components/people/total_info';
import Planets from './components/planets';
import TotalInfoPlanet from './components/planets/total_info';
import Films from './components/films';
import TotalInfoFilm from './components/films/total_info';
import Species from './components/species';
import TotalInfoSpecies from './components/species/total_info';
import Vehicles from './components/vehicles';
import TotalInfoVehicle from './components/vehicles/total_info';
import Starships from './components/starships';
import TotalInfoStarship from './components/starships/total_info';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path='/' component={Container}/>
            <Route exact path='/about' component={About}/>
            <Route exact path="/people" component={People}/>
            <Route exact path="/people/:num" component={TotalInfoPerson}/>
            <Route exact path="/planets" component={Planets}/>
            <Route exact path="/planets/:num" component={TotalInfoPlanet}/>
            <Route exact path="/films" component={Films}/>
            <Route exact path="/films/:num" component={TotalInfoFilm}/>
            <Route exact path="/species" component={Species}/>
            <Route exact path="/species/:num" component={TotalInfoSpecies}/>
            <Route exact path="/vehicles" component={Vehicles}/>
            <Route exact path="/vehicles/:num" component={TotalInfoVehicle}/>
            <Route exact path="/starships" component={Starships}/>
            <Route exact path="/starships/:num" component={TotalInfoStarship}/>
          </Switch>
          <Footer/>
        </div>
      </Router>  
    );
  };
};

export default App;
