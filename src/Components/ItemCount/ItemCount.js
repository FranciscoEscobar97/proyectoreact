import React, {useState} from 'react';
function ItemCount(){
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
        setCounter(counter-1)
    }
    return(
        <div>
            <button onClick={sumar}>+</button>
            <span>{counter}</span>
            <button onClick={restar}>-</button>
        </div>
    )

}
export default ItemCount;