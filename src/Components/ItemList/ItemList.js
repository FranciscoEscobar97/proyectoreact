import React from 'react';
import Item from '../Item/Item';


function ItemList({productos}){

    
    return(
        <>
        <h1>Listado de items</h1>
        <div>
            {productos.map(prod=>
                <Item prod={prod}/>)}
        </div> 
            
        </>

    );
}

export default ItemList;