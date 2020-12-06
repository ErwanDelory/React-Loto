import React from 'react';
import { Nav } from 'react-bootstrap';

const NavUser = () => {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Cat 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Cat 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Cat 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Cat 4</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default NavUser;
