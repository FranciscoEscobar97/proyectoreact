import React from 'react';
import {Container} from 'semantic-ui-react'
import { Icon, InlineIcon } from '@iconify/react';
import facebookRect from '@iconify-icons/brandico/facebook-rect';
import instagramIcon from '@iconify-icons/bi/instagram';

import './Footer.css'
// Imagen


function Footer() {
	return (
		<Container>
            <div className="footer">
                <div>
		           <h3 className="textofooter"> Sigue nuestras redes sociales, tenemos contenido para ti </h3>
                </div>
                <div className="footerredes">
                    <Icon icon={facebookRect} width="4em" height="5em"/> &nbsp; &nbsp;
                    <Icon icon={instagramIcon} width="4em" height="5em" />
                </div>    
            </div>
        </Container>
	);
}

export default Footer;