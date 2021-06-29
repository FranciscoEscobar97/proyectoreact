import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';



function ItemListContainer({greeting}){
    
        const[productos,setProductos]=useState([])
        useEffect(()=>{
            const prom = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve([
                        {id:1, nombre:"taladro makita", precio:450.000,imageUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_748915-MCO45645167116_042021-F.webp"},
                        {id:2, nombre:"taladro B&D", precio:600.000,imageUrl:"https://http2.mlstatic.com/D_NQ_NP_2X_951010-MCO45801444552_052021-F.webp"}
                    ])
                },2000)
            })
            prom.then((res)=>{
               setProductos(res);
            })
        },[])

    return(
        <>
         <h1>{greeting}</h1>
         <ItemList productos={productos}/>
         
        </>
    )

}

export default ItemListContainer;