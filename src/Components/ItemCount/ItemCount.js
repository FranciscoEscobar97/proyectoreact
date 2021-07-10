import React, {useState} from 'react';
import { Button } from 'semantic-ui-react';
import './ItemCount.css'



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
        <div className="ItemCount">
            
            
                <Button inverted color='orange' onClick={sumar} >
                    +
                </Button>&nbsp; &nbsp;
                <span className="numberCount">{counter}</span>&nbsp; &nbsp;
                <Button inverted color='yellow' onClick={restar}>
                   -
                </Button> <br/><br/>
                <Button secondary onClick={()=>onAdd(counter)}>
                  Agregar al carrito
                </Button>
            
            
            
        </div>
    )
      
    

}
export default ItemCount;