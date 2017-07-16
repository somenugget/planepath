import React from 'react';
import { Table } from 'semantic-ui-react';

const getTripCities = (flights) => {
  const cities = flights.map(flight => flight.from);
  cities.push(flights[flights.length - 1].to);
  return cities.join(' -> ');
};

const TripsList = ({ trips }) => {
  if (!trips.length) {
    return null;
  }

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Trip id</Table.HeaderCell>
          <Table.HeaderCell>Flights</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {trips.map(trip => (
          <Table.Row key={trip.id}>
            <Table.Cell>{trip.id}</Table.Cell>
            <Table.Cell>
              {getTripCities(trip.flights)}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TripsList;
