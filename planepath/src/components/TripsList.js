import React from 'react';
import { Table } from 'semantic-ui-react';

const getTripCities = (trip) => {
  return trip.map(path => (
    `${path.from} -> ${path.to}`
  ));
};

const TripsList = ({ trips }) => {
  if (!trips.length) {
    return null;
  }

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Flights</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {trips.map(trip => (
          <Table.Row key={`${trip.from}_${trip.to}`}>
            <Table.Cell>
              {getTripCities(trip)}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TripsList;
