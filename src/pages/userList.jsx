import React from 'react';
import { Table } from 'react-bootstrap';

const UserList = () => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Maha</td>
          <td>El Kourdi</td>
          <td>maha@elkourdi.fr</td>
        </tr>
        <tr>
          <td>2</td>
          <td>???</td>
          <td>???</td>
          <td>???</td>
        </tr>
        <tr>
          <td>3</td>
          <td>???</td>
          <td>???</td>
          <td>???</td>
        </tr>
      </tbody>
    </Table>
  );
};
export default UserList;
