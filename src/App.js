import './scss/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { brutalist, flat, glassmorphism, monochromatic, neumorphism, threed } from './Components/Data';
import Menu from './Components/Menu';
import Flat from './Components/Flat';


function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Redirect to="/flat-design"/>
          </Route>
          <Route path="/no-css">
            <Flat data={flat}/>
          </Route>
          <Route path="/flat-design">
            <Flat data={flat}/>
          </Route>
          <Route path="/glassmorphism">
            <Flat data={glassmorphism}/>
          </Route>
          <Route path="/neumorphism">
            <Flat data={neumorphism}/>
          </Route>
          <Route path="/monochromatic">
            <Flat data={monochromatic}/>
          </Route>
          <Route path="/brutalist">
            <Flat data={brutalist}/>
          </Route>
          <Route path="/threed">
            <Flat data={threed}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
