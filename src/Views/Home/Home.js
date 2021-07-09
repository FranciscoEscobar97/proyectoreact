import React from 'react';
import './Home.css';
import {Container} from 'semantic-ui-react';
import Astronaut from './astronaut.jpg'
import{Image} from 'semantic-ui-react'
function Home(){
    return(
        <Container>
            
            <h1 className="tittleheader">Hey aventurero, contagiate de las mejores energias</h1>
            <h3>Tenemos un universo que mostrarte</h3>
            <p>Licores, prendas importadas y nacionales, accesorios, tennis y lo necesario para tu alegria </p>
            <div>
            <Image src={Astronaut} alt="Cart logo" />
            </div>
        </Container>
        
    )


}

export default Home;