import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const ContactForm = ({ onAddContact, lastContactId }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    contactNumber: '',
    location: '',
    registeredDate: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleAddContact = () => {
    // ... (unchanged code)

    // Redirect back to ContactTable after adding a contact using history
    history.push('/');
  };

  const formatFullName = () => {
    const { fullName } = formData;
    const names = fullName.split(' ');
    if (names.length === 1) {
      return names[0];
    } else if (names.length === 2) {
      return `${names[1]}, ${names[0]}`;
    } else {
      return `${names[names.length - 1]}, ${names[0]} ${names
        .slice(1, -1)
        .map((middle) => middle.charAt(0))
        .join(' ')}.`;
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form>
        <TextField
          label="Full Name"
          value={formData.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName}
        />
        {/* Add other form fields as needed */}
        <Button variant="contained" color="primary" onClick={handleAddContact}>
          Add Contact
        </Button>
        <Button variant="contained" color="default" onClick={() => history.push('/')}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
