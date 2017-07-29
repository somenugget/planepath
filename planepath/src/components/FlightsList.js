import React from 'react';
import { Table, Button, Checkbox } from 'semantic-ui-react';
import RemovingFlightModal from './RemovingFlightModal';

const FlightsList = ({ flights,
                       updateFlight,
                       setUpdatingFlight,
                       removingFlight,
                       setRemovingFlight,
                       removeFlight,
                       unsetRemovingFlight }) => {
  if (!flights.length) {
    return <h4>You have no flights added</h4>;
  }

  let removingFlightModal = null;
  if (removingFlight) {
    const removingFlightObject = flights.find(flight => flight.id === removingFlight);
    removingFlightModal = (
      <RemovingFlightModal
        open={!!removingFlight}
        flight={removingFlightObject}
        removeFlight={removeFlight}
        unsetRemovingFlight={unsetRemovingFlight}
      />
    );
  }

  return (
    <div>
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
              <Table.Cell>
                <Checkbox
                  checked={flight.active}
                  onChange={(e, data) => updateFlight(flight.id, { active: data.checked })}
                />
              </Table.Cell>
              <Table.Cell>
                <Button.Group>
                  <Button color="green" onClick={() => setUpdatingFlight(flight.id)}>Edit</Button>
                  <Button color="red" onClick={() => setRemovingFlight(flight.id)}>Remove</Button>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {removingFlightModal}
    </div>
  );
};

export default FlightsList;
