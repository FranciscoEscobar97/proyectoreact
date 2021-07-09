import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import CartWidget from '../CartWidget/CartWidget';
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
         {/* <Link to='/accesorios'>
            <Menu.Item
              name='Accesorios'
              active={activeItem === 'accesorios'}
              onClick={this.handleItemClick}
            />
          </Link> */}
          {/* <Link to='/green'>
          <Menu.Item
            name='Tienda verde'
            active={activeItem === 'green'}
            onClick={this.handleItemClick}
          />
          </Link> */}
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
            <Dropdown.Item><Link to='/green'>Papeles</Link></Dropdown.Item>
            <Dropdown.Item>Pipas-bongs</Dropdown.Item>
            <Dropdown.Item>Mecheros</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position='right'>
          <CartWidget/>
          </Menu.Menu>
          
        
          
        </Menu>
      
    )
  }
}



