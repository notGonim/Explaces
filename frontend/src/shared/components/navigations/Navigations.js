import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BackDrop } from '../BackDrop'
import { Header } from './Header'
import { NavLinks } from './NavLinks'
import { SideDrawer } from './SideDrawer'

export const Navigations = () => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)


  return (
    <>
      {drawerIsOpen && <BackDrop Click={() => setDrawerIsOpen(false)} />}
      <SideDrawer show={drawerIsOpen} Click={() => setDrawerIsOpen(false)} >
        <NavDrawer>
          <NavLinks />
        </NavDrawer>
      </SideDrawer>
      <Header >
        <Button onClick={() => setDrawerIsOpen(true)}>
          <Span />
          <Span />
          <Span />
        </Button>
        <Title>
          <Link to="/">Your Places</Link>
        </Title>
        <Nav>
          <NavLinks />
        </Nav>
      </Header>

    </>)
}

const Nav = styled.nav`
 display: none;
 @media (min-width: 768px) { 
    display: block;
  }

`


const Button = styled.button`
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  cursor: pointer;


@media (min-width: 768px) {
    display: none;
  }

`
const Span = styled.span`
  display: block;
  width: 3rem;
  height: 2.5px;
  background: white;


`


const Title = styled.h1`
 color: white;
 a {
  text-decoration: none;
  color: white;
}
`



const NavDrawer = styled.nav`
 height: 100%;
`