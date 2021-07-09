import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {Container} from 'semantic-ui-react';
import axios from 'axios';


function ItemListContainer({greeting}){
        
    const [productos,setProductos]=useState([]);
    
    useEffect(()=>{
        axios("https://my-json-server.typicode.com/FranciscoEscobar97/api/lista").then((res)=>setProductos(res.data));
    },[]);

    return(
        <>
         <h1>{greeting}</h1>
         <Container>
             
         <ItemList productos={productos}/>
         
         </Container>
        </>
    )

}

export default ItemListContainer;