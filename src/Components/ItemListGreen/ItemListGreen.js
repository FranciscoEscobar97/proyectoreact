import React from 'react';
import ItemGreen from '../ItemGreen/ItemGreen';
import './ItemListGreen.css';

import {Link} from 'react-router-dom';

function ItemListGreen({productos}){

    
    return(
        <>
            
            <div className='CardUser'>
            
                {productos.map((prod)=>{
                    return(
                        
                        
                        <div key={prod.id}>
                            <Link to={`/detailgreen/${prod.id}`}>
                                <ItemGreen prod={prod}/>
                            </Link>
                        </div>
                           
                        
                        
                    );
                })}
                 
            </div>    
            
       
         
        </>

    );
}

export default ItemListGreen;