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
        <Typography>Are you sure you want to delete this contact?</Typography>
        <Typography>ID: {id}</Typography>
        <Typography>Full Name: {contact?.fullName}</Typography>
        <Typography>Email: {contact?.emailAddress}</Typography>
        <Typography>Contact Number: {contact?.contactNumber}</Typography>
        <Typography>Location: {contact?.location}</Typography>
        <Typography>Registered Date: {contact?.registeredDate}</Typography>

        {/* Confirmation Dialog */}
        <Dialog open={isOpen} onClose={onClose}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete the record?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              No
            </Button>
            <Button onClick={handleConfirmDelete} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirmDelete} color="primary">
          Confirm Delete
        </Button>
      </div>
    </Modal>
  );
};

const DeleteContact = ({ contact, isOpen, onClose, onDelete, id }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Delete Contact Details</DialogTitle>
      <DialogContent>
        <DeleteModal
          contact={contact}
          isOpen={isOpen}
          onClose={onClose}
          onDelete={onDelete}
          id={id}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteContact;
