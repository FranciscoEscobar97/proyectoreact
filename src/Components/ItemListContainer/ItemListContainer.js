import React,{useState,useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';



function ItemListContainer({greeting}){
    
        const[productos,setProductos]=useState([])
        useEffect(()=>{
            const prom = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve([
                        {"id":1, "nombre":"Aguardiente Blanco Del Valle Sin Azucar Botella X 750a", "precio":"$29.350","imageUrl":"https://raw.githubusercontent.com/FranciscoEscobar97/imagenes/master/aguardiente-blanco-del-valle-sin-azucar-botella-x-750-1.webp"},
                        {"id":2, "nombre":"Aguardiente Blanco Del Valle Sin Azucar Caneca X 375", "precio":"$17.000","imageUrl":"https://raw.githubusercontent.com/FranciscoEscobar97/imagenes/master/aguardiente-blanco-del-valle-sin-azucar-caneca-x-375-1.webp"},
                        {"id":3, "nombre":"Cerveza Budweiser Lata 269ml, 6 Pack. 5% ABV", "precio":"$13.150","imageUrl":"https://raw.githubusercontent.com/FranciscoEscobar97/imagenes/master/cerveza-budweiser-lata-269ml%2C-6-pack.-5%25-abv-1.webp"},
                        {"id":4, "nombre":"Cerveza Club Colombia Dorada Lata 330ml, 6 Pack. 4.7% ABV", "precio":"$15.100","imageUrl":"https://raw.githubusercontent.com/FranciscoEscobar97/imagenes/master/cerveza-club-colombia-dorada-lata-330ml%2C-6-pack.-4.7%25-abv-1.webp"},
                        {"id":5, "nombre":"Cerveza Club Colombia Dorada Lata 330ml 4.7% ABV", "precio":"$2.500","imageUrl":"https://raw.githubusercontent.com/FranciscoEscobar97/imagenes/master/cerveza-club-colombia-dorada-lata-330ml-4.7%25-abv-2.webp"},
                        {"id":6, "nombre":"Cerveza Corona Extra Botella NR 355ml 6 Pack 4.5% ABV", "precio":'$22.000',"imageUrl":"https://raw.githubusercontent.com/FranciscoEscobar97/imagenes/master/cerveza-corona-extra-botella-nr-355ml-6-pack-4.5%25-abv-1.webp"},
                        {"id":7, "nombre":"Crema de Whisky Cherish 750 ml", "precio":"$41.980","imageUrl":"https://raw.githubusercontent.com/FranciscoEscobar97/imagenes/master/crema-de-whisky-cherish-750-ml-1.webp"},
                        {"id":8, "nombre":"Vodka Absolut X 1000 Ml", "precio":'$90.950',"imageUrl":"https://raw.githubusercontent.com/FranciscoEscobar97/imagenes/master/vodka-absolut-x-1000-ml-1.webp"}
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