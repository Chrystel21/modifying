import React from 'react';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';

const Main = () => {
  return (
    <div className="container">
      <div className="form-container">
        <ContactForm />
      </div>
      <div className="table-container">
        <ContactTable />
      </div>
    </div>
  );
};

export default Main;
