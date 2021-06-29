import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
// import logo from './logo.svg';
import './App.css';
import ItemCount from './Components/ItemCount/ItemCount';


function App() {
  const onAdd =(counter)=>{
    console.log("agregar al carrito", counter)
  }
  return (
    <div className="App">
      <NavBar/>
      <ItemCount onAdd={onAdd}/>
      <ItemListContainer greeting='Agregar al carrito'/>
       
    </div>
  );
}

export default App;
