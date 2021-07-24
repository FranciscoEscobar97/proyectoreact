import React,{useState,useEffect} from 'react';
import './ItemListContainerGreen.css';
import ItemListGreen from '../ItemListGreen/ItemListGreen';

import axios from 'axios';


function ItemListContainerGreen({greeting}){
        
    const [productos,setProductos]=useState([]);
    
    useEffect(()=>{
        axios("https://my-json-server.typicode.com/FranciscoEscobar97/api/green").then((res)=>setProductos(res.data));
    },[]);

    return(
        <>
         <h1>{greeting}</h1>
         <ItemListGreen productos={productos}/>
        </>
    )

}

export default ItemListContainerGreen;