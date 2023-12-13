import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const ViewContact = ({ contact, id }) => {
  const history = useHistory();

  if (!contact) {
    return null;
  }

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Typography variant="h6"> Contact Details </Typography>
      <Typography>ID: {id}</Typography>
      <Typography>Full Name: {contact?.fullName}</Typography>
      <Typography>Email: {contact?.emailAddress}</Typography>
      <Typography>Contact Number: {contact?.contactNumber}</Typography>
      <Typography>Location: {contact?.location}</Typography>
      <Typography>Registered Date: {contact?.registeredDate}</Typography>

      <Button onClick={handleGoBack} color="primary">
        Go Back
      </Button>
    </div>
  );
};

export default ViewContact;
