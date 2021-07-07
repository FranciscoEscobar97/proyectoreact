import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'
import { Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function ItemList({productos}){

    
    return(
        <>
        <Container>
            <div className="CardUser">
                {productos.map((prod)=>{
                    return(
                        <div key={prod.id}>
                            <Link to={`/detail/${prod.id}`}>
                                <Item prod={prod}/>
                            </Link>
                        </div>
                    );
                })}
            </div>    
              
        {/* <div className="CardUser">
            {productos.map(prod=>
                <Item prod={prod}/>)}
        </div> */}
        </Container>   
        </>

    );
}

export default ItemList;