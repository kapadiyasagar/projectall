import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './container/Home/Home';
import { Route ,Switch } from 'react-router-dom';
import Departmant from './container/Departmant/Departmant';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import Doctor from './container/Doctor/Doctor';
import Login from './container/log-in/Login';
import Appointment from './container/Appointment/Appointment';

function App() {
  return (
  <>
  <Header/>
  <Switch>
    
    <Route exact path={"/"} component={Home}/>
    <Route exact path={"/departments"} component={Departmant}/>
    <Route exact path={"/doctors"} component={Doctor}/>
    <Route exact path={"/about"} component={About}/>
    <Route exact path={"/contact"} component={Contact}/>
    <Route exact path={"/login"} component={Login}/>
    <Route exact path={"/appointment"}component={Appointment}/>
    

  </Switch>
  <Footer/>
  </>
  );
}

export default App;

