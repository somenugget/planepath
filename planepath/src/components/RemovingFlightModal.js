import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const RemovingFlightModal = ({ open, unsetRemovingFlight, removeFlight, flight }) => {
  return (
    <Modal size="small" open={open}>
      <Modal.Header>
        Remove a flight {flight.code}
      </Modal.Header>
      <Modal.Content>
        <p>
          Are you sure you want to remove flight
        </p>
        <p>
          <strong>
            {flight.code} / {flight.from.title} - {flight.to.title}
          </strong> ?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative content="No" onClick={() => unsetRemovingFlight()} />
        <Button positive content="Yes" onClick={() => removeFlight(flight.id)} />
      </Modal.Actions>
    </Modal>
  );
};

export default RemovingFlightModal;
