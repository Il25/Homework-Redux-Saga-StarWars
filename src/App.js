import React from 'react';
import Header from './components/header';
import Container from './screens/container';
import Footer from './components/footer';
import About from './screens/about';
import People from './screens/people';
import TotalInfoPerson from './screens/people/total_info';
import Planets from './screens/planets';
import TotalInfoPlanet from './screens/planets/total_info';
import Films from './screens/films';
import TotalInfoFilm from './screens/films/total_info';
import Species from './screens/species';
import TotalInfoSpecies from './screens/species/total_info';
import Vehicles from './screens/vehicles';
import TotalInfoVehicle from './screens/vehicles/total_info';
import Starships from './screens/starships';
import TotalInfoStarship from './screens/starships/total_info';
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
