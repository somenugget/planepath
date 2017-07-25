import React from 'react';
import { Table, Button, Checkbox } from 'semantic-ui-react';


const FlightsList = ({ flights }) => {
  if (!flights.length) {
    return <h4>You have no flights added</h4>;
  }

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Flight id</Table.HeaderCell>
          <Table.HeaderCell>Code</Table.HeaderCell>
          <Table.HeaderCell>From</Table.HeaderCell>
          <Table.HeaderCell>To</Table.HeaderCell>
          <Table.HeaderCell>Departure</Table.HeaderCell>
          <Table.HeaderCell>Duration</Table.HeaderCell>
          <Table.HeaderCell>Cost</Table.HeaderCell>
          <Table.HeaderCell>Active</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {flights.map(flight => (
          <Table.Row key={flight.id}>
            <Table.Cell>{flight.id}</Table.Cell>
            <Table.Cell>{flight.code}</Table.Cell>
            <Table.Cell>{flight.from.title}</Table.Cell>
            <Table.Cell>{flight.to.title}</Table.Cell>
            <Table.Cell>{flight.departure}</Table.Cell>
            <Table.Cell>{flight.duration} min.</Table.Cell>
            <Table.Cell>{flight.cost} $</Table.Cell>
            <Table.Cell><Checkbox checked={flight.active} /></Table.Cell>
            <Table.Cell>
              <Button.Group>
                <Button color="green">Edit</Button>
                <Button color="red">Remove</Button>
              </Button.Group>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default FlightsList;
