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
import Navigation from './Components/Navigation/Navigation';
import Home from './Views/Home/Home';
import Licores from './Views/Licores/Licores';
import Green from './Views/Green/Green';
import Estilo from './Views/Estilo/Estilo';
import Accesorios from './Views/Accesorios/Accesorios';
import Footer from './Components/Footer/Footer';
import ItemDetalle from './Views/ItemDetalle/ItemDetalle';
import ItemDetalleBuzos from './Views/ItemDetalleBuzos/ItemDetalleBuzos';
import ItemDetalleGreen from './Views/ItemDetalleGreen/ItemDetalleGreen';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Header/>
        {/* <NavBar/> */}
        <br/>
        <br/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/licores' component={Licores}/>
          <Route path='/accesorios' component={Accesorios}/>
          <Route path='/prendas' component={Estilo}/>
          <Route path='/green' component={Green}/>
          <Route path='/detail/:id' component={ItemDetalle}/>
          <Route path='/detailbuzos/:id' component={ItemDetalleBuzos}/>
          <Route path='/detailgreen/:id' component={ItemDetalleGreen}/>
        </Switch>
        {/* <ItemListContainer greeting='Bienvenidos - por Francisco Escobar'/>
         */}
         <br/>
         <br/>
         <br/>
        <Footer/>
      </div>
      
     </Router>
     
  );
}

export default App;
