import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const deleteContact = ({ onDeleteContact, onClose, open }) => {
  const handleDeleteContact = () => {
    onDeleteContact();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        Are you sure you want to delete the record?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          No
        </Button>
        <Button onClick={handleDeleteContact} color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default deleteContact;