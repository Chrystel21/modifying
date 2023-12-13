import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';
import { useHistory } from 'react-router-dom';

const UpdateContact = ({ contact, onUpdateContact }) => {
  const history = useHistory();
  const [updatedContact, setUpdatedContact] = useState({});
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  useEffect(() => {
    setUpdatedContact(contact);
  }, [contact]);

  const handleInputChange = (name, value) => {
    setUpdatedContact({
      ...updatedContact,
      [name]: value,
    });
  };

  const handleOpenConfirmDialog = () => {
    setConfirmDialogOpen(true);
  };

  const handleCloseConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };

  const handleUpdateContact = () => {
    handleCloseConfirmDialog(); // Close the confirmation dialog
    onUpdateContact(updatedContact);
    // Optionally, you can redirect to a different route after updating
    history.push('/');
  };

  return (
    <div>
      {/* Full Name */}
      <TextField label="Full Name" value={updatedContact?.fullName || ''} disabled />

      {/* Email Address */}
      <TextField
        label="Email Address"
        value={updatedContact?.emailAddress || ''}
        onChange={(e) => handleInputChange('emailAddress', e.target.value)}
      />

      {/* Contact Number */}
      <TextField
        label="Contact Number"
        value={updatedContact?.contactNumber || ''}
        onChange={(e) => handleInputChange('contactNumber', e.target.value)}
      />

      {/* Location */}
      <FormControl>
        <InputLabel>Select Location</InputLabel>
        <Select
          value={updatedContact?.location || ''}
          onChange={(e) => handleInputChange('location', e.target.value)}
        >
          <MenuItem value="Manila">Manila</MenuItem>
          <MenuItem value="Cebu">Cebu</MenuItem>
        </Select>
      </FormControl>

      {/* Registered Date */}
      <TextField
        label="Registered Date"
        type="date"
        value={updatedContact?.registeredDate || ''}
        onChange={(e) => handleInputChange('registeredDate', e.target.value)}
        InputLabelProps={{ shrink: true }}
      />

      {/* Update Button */}
      <Button variant="contained" color="primary" onClick={handleOpenConfirmDialog}>
        Update
      </Button>

      {/* Confirmation Dialog */}
      <Dialog open={confirmDialogOpen} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Confirm Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please confirm the update to the following:
            <br />
            Email Address: {updatedContact?.emailAddress}
            <br />
            Contact Number: {updatedContact?.contactNumber}
            <br />
            Location: {updatedContact?.location}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog} color="primary">
            No
          </Button>
          <Button onClick={handleUpdateContact} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateContact;
