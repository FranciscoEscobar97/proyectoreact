import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: 'inicio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='Inicio'
              active={activeItem === 'inicio'}
              onClick={this.handleItemClick}
            />
         </Link> 
         <Link to='/licores'>
            <Menu.Item
              name='Licores'
              active={activeItem === 'licores'}
              onClick={this.handleItemClick}
            />
          </Link>
         <Link to='/prendas'>
            <Menu.Item
              name='Buzos'
              active={activeItem === 'prendas'}
              onClick={this.handleItemClick}
            />
          </Link>
         
          <Dropdown item text='Accesorios'>
          <Dropdown.Menu>
            <Dropdown.Header>Elige</Dropdown.Header>
            <Dropdown.Item>Tennis</Dropdown.Item>
            <Dropdown.Item>Gorras</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Tienda verde'>
          <Dropdown.Menu>

            <Dropdown.Header>Elige</Dropdown.Header>
            
            <Dropdown.Item><Link to='/green'>Pipas-bongs</Link></Dropdown.Item>
            
          </Dropdown.Menu>
          </Dropdown>
          
          <Menu.Menu>
          <Icon/>
          </Menu.Menu>
          
        
          
        </Menu>
      
    )
  }
}



