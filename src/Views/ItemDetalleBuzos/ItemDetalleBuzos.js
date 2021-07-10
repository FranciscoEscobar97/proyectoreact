import React,{useEffect,useState} from 'react'
import axios from 'axios'

import { Grid, Image } from 'semantic-ui-react'
import ItemCount from '../../Components/ItemCount/ItemCount'
import InputSelect from '../../Components/InputSelect/InputSelect'


//import {Card, Image} from 'semantic-ui-react'
function ItemDetalleBuzos({match}){
    const onAdd =(counter)=>{
        console.log("agregar al carrito", counter)
      }
    //console.log('MATCH',match);
    let detalleID =match.params.id;
    const [detalle,setDetalle]=useState([]);
    //console.log(typeof detalle);
    useEffect(()=>{
        axios(`https://my-json-server.typicode.com/FranciscoEscobar97/api/buzos/${detalleID}`).then((res)=>setDetalle(res.data));
    },[detalleID]);
    //console.log(typeof detalle);
    return(
        
               
                <div key={detalle.id}>
                    <Grid container columns={2} padded='vertically'>
                    <Grid.Column>
                        <Image src={detalle.imageUrl}/>
                    </Grid.Column>
                    <Grid.Column>
                        <h2 className="nombreParrafo">{detalle.nombre}</h2>
                        <p className="parra">Referencia: <span className="refParaffo"> {detalle.referencia}</span></p>
                        <p className="parra">Precio: <span className="precioParaffo">{detalle.precio}</span></p>
                        <ItemCount onAdd={onAdd}/>
                        <InputSelect/>
                    </Grid.Column>
                    </Grid>
                </div>
        
    );
}
export default ItemDetalleBuzos;