import React from 'react';
import Cart from './cart.png';

function CartWidget(){
    return(
        <div>
            <img src={Cart} alt="Cart logo" style={{height:'40px',paddingTop:'5px'}}/>
        </div>
        
    )
}

export default CartWidget;