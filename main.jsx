import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';

const Main = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className="container">
        <div className="form-container">
          <ContactForm onAddContact={handleAddContact} />
        </div>
        <div className="table-container">
          <ContactTable contacts={contacts} />
        </div>
      </div>
    </Container>
  );
};

export default Main;
