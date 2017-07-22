import React from 'react';
import { Table } from 'semantic-ui-react';


const FlightsList = ({ flights }) => {
  if (!flights.length) {
    return <h4>You have no flights added</h4>;
  }

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Flight id</Table.HeaderCell>
          <Table.HeaderCell>From</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {flights.map(flight => (
          <Table.Row key={flight.id}>
            <Table.Cell>{flight.id}</Table.Cell>
            <Table.Cell>{flight.from_id}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default FlightsList;
