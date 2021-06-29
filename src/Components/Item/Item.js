import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import './Item.css'
function Item({prod}){
    return(
        <div className="contenedor">
        <Card >
        <Image src={prod.imageUrl} rapped ui={false} />
        <Card.Content>
        <Card.Header>{prod.nombre}</Card.Header>
        
        <Card.Description>
          precio {prod.precio}
        </Card.Description>
        </Card.Content>
        
        </Card>
         
        </div>    
       
    );
}
 export default Item;