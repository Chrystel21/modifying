import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const viewContact = ({ contact, onClose, open }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Contact Details</DialogTitle>
      <DialogContent>
        {/* Render contact details here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default viewContact;