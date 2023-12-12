// DeleteModal.jsx
import React from 'react';
import {
  Modal,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import './styles.css';

const DeleteModal = ({ contact, isOpen, onClose, onDelete, id }) => {
  const handleConfirmDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className='modal-container'>
        <Typography variant='h6'> Confirm Deletion </Typography>
        <Typography>
          Are you sure you want to delete the record with ID: {id}?
        </Typography>

        <DialogActions>
          <Button onClick={onClose} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Yes
          </Button>
        </DialogActions>
      </div>
    </Modal>
  );
};

const DeleteContact = ({ contact, isOpen, onClose, onDelete, id }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle> Delete Contact Details </DialogTitle>
      <DialogContent>
        <DeleteModal
          contact={contact}
          isOpen={isOpen}
          onClose={onClose}
          onDelete={onDelete}
          id={id}
        />
      </DialogContent>
      {/* DialogActions removed from here */}
    </Dialog>
  );
};

export default DeleteContact;
