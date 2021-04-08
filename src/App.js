import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

import './App.css';
import './assets/css/main.css';

import Home from './components/Home';
import SecondNav from './components/SecondNav';
import Dashboard from './Pages/Dashboard';
import NewPatient from './Pages/NewPatient';
import MyPatients from './Pages/MyPatients';
import {AppProvider} from './context/AppContext';

// Components
import Header from './components/Header/Header';


function App() {

  return (
    <AppProvider>
    <div className="App">
      <Header active={true}/>
      <main>
      <div className="row h-100 bg-light">
      <Router>
        <SecondNav />
        <div className="col-10">

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/newPatient" exact component={NewPatient} />
          <Route path="/mypatients" exact component={MyPatients} />
        </Switch>

        </div>
        </Router>
      </div>
      </main>
    </div>
    </AppProvider>
  );
}

export default App;
