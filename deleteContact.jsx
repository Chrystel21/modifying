import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const DeleteContact = ({ contact, isOpen, onClose, onDelete, id }) => {
  const history = useHistory();

  const handleConfirmDelete = () => {
    onDelete(contact);
    onClose();
    // Optionally, you can redirect to the main page after deletion
    history.push('/');
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Delete Contact</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the contact with ID {id} - {contact.fullName}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirmDelete} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteContact;
