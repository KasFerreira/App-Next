import React from 'react';

import Main from '../Main'

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
  <Container>
    
      {/* <MenuBar/> */}
      <Main/>
      {/* <SideBar/> */}
    
  </Container>)
}

export default Layout;