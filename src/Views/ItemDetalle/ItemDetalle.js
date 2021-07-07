import React,{useEffect,useState} from 'react'
import axios from 'axios'
//import {Card, Image} from 'semantic-ui-react'
function ItemDetalle({match}){
    //console.log('MATCH',match);
    let detalleID =match.params.id;
    const [detalle,setDetalle]=useState([]);
    console.log(typeof detalle);
    useEffect(()=>{
        axios(`https://my-json-server.typicode.com/FranciscoEscobar97/api/lista/${detalleID}`).then((res)=>setDetalle(res.data));
    },[detalleID]);
    console.log(typeof detalle);
    return(
        <div className="CardUser">
                {/* {detalle.map((prod)=>{
                    console.log(prod);
                    return(
                        
                        <Card key={prod.id}>
                            <Image src={prod.imageUrl} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header>{prod.nombre}</Card.Header>
                            </Card.Content>
                        </Card> 
                    );
                })} */}
            </div>   
    );
}
export default ItemDetalle;