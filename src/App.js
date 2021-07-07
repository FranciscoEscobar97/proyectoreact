import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
//import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
// import logo from './logo.svg';
import './App.css';
//REACT ROUTER DOM

//import ItemCount from './Components/ItemCount/ItemCount';
import Header from './Components/Header/Header';
//VIEWS
import Home from './Views/Home/Home';
import Licores from './Views/Licores/Licores';
import Green from './Views/Green/Green';
import Navigation from './Components/Navigation/Navigation';
import ItemDetalle from './Views/ItemDetalle/ItemDetalle';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header/>
        <NavBar/>
        <Navigation/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/licores' component={Licores}/>
          <Route path='/green' component={Green}/>
          <Route path='/detail/:id' component={ItemDetalle}/>
        </Switch>
        {/* <ItemListContainer greeting='Bienvenidos - por Francisco Escobar'/>
         */}
      </div>
     </Router>
  );
}

export default App;
