import _ from 'lodash'
import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount';

import './ItemGreen.css'


function ItemGreen({prod}){
  const onAdd =(counter)=>{
    console.log("agregar al carrito", counter)
  }
    return(
      
            <Card >
              <Image src={prod.imageUrl} rapped ui={false}/>
              <Card.Content>
              <Card.Header>{prod.nombre}</Card.Header>
              <Card.Description>
                precio {prod.precio}
              </Card.Description>
              <br/>
              <Card.Description>
                <ItemCount onAdd={onAdd}/>
              </Card.Description>
              </Card.Content>
            </Card>

          
    );
}


 export default ItemGreen;