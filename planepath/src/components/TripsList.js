import _ from 'lodash';
import React from 'react';
import { Table } from 'semantic-ui-react';

const getTripPartCities = (tripPart, citiesIds) => (
 `${citiesIds[tripPart.from].title} -> ${citiesIds[tripPart.to].title}`
);

const getTripCities = (trip, citiesIds) => (
  trip.reduce((header, current, index) => {
    if (index === 0) {
      return getTripPartCities(current, citiesIds);
    }

    return `${header} -> ${citiesIds[current.to].title}`;
  }, '')
);

const tripTable = (trip, citiesIds) => (
  <Table celled key={`${trip.from}_${trip.to}`}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="4">{getTripCities(trip, citiesIds)}</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Code</Table.HeaderCell>
        <Table.HeaderCell>Departure</Table.HeaderCell>
        <Table.HeaderCell>Duration</Table.HeaderCell>
        <Table.HeaderCell>Cost</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    {trip.map(tripPart => (
      <Table.Body key={`${tripPart.from}_${tripPart.to}`}>
        <Table.Row className="trip-part-header">
          <Table.Cell colSpan="4">{getTripPartCities(tripPart, citiesIds)}</Table.Cell>
        </Table.Row>
        {tripPart.flights.map(flight => (
          <Table.Row key={flight.id}>
            <Table.Cell>{flight.code}</Table.Cell>
            <Table.Cell>{flight.departure}</Table.Cell>
            <Table.Cell>{flight.duration} min.</Table.Cell>
            <Table.Cell>{flight.cost} $</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    ))}
  </Table>
);

const TripsList = ({ trips, cities }) => {
  if (!trips.length) {
    return null;
  }

  const citiesIds = _.keyBy(cities, 'id');

  return (
    <div>
      {trips.map(trip => tripTable(trip, citiesIds))}
    </div>
  );
};

export default TripsList;
