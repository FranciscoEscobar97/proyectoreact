import React, {useState} from 'react';
import { Button, Segment } from 'semantic-ui-react';




function ItemCount({onAdd}){
    let stock = 15;
    const[counter,setCounter]=useState(0);
    const sumar=()=>{ 
        if(counter<stock){
            setCounter(counter+1)
        }else{
            console.log('No hay mas producto disponible')
        }
    };
    const restar=()=>{
        if(counter>0){
            setCounter(counter-1)
        }else{
            console.log('No hay mas producto disponible')
        }
       
    }
    return(
        <div>
            
            <Segment inverted>
                <Button inverted color='orange' onClick={sumar} >
                    +
                </Button>
                <span>{counter}</span>
                <Button inverted color='yellow' onClick={restar}>
                   -
                </Button> 
                <Button inverted color='black' onClick={()=>onAdd(counter)}>
                  Agregar al carrito
                </Button>
                
            </Segment>
            
        </div>
    )
      
    

}
export default ItemCount;