import React,{useState,useEffect} from 'react';
import './ItemListContainerBu.css';
import ItemListBu from '../ItemListBu/ItemListBu';

import axios from 'axios';


function ItemListContainerBu({greeting}){
        
    const [productos,setProductos]=useState([]);
    
    useEffect(()=>{
        axios("https://my-json-server.typicode.com/FranciscoEscobar97/api/buzos").then((res)=>setProductos(res.data));
    },[]);

    return(
        <>
         <h1>{greeting}</h1>
         
             
         <ItemListBu productos={productos}/>
         
         
        </>
    )

}

export default ItemListContainerBu;