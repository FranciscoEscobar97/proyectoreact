import React from 'react';
import ItemBu from '../ItemBu/ItemBu';
import './ItemListBu.css';

import {Link} from 'react-router-dom';

function ItemListBu({productos}){

    
    return(
        <>
            
            <div className='CardUser'>
            
                {productos.map((prod)=>{
                    return(
                        
                        
                        <div key={prod.id}>
                            <Link to={`/detailbuzos/${prod.id}`}>
                                <ItemBu prod={prod}/>
                            </Link>
                        </div>
                           
                        
                        
                    );
                })}
                 
            </div>    
            
       
         
        </>

    );
}

export default ItemListBu;