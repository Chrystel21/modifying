import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TablePagination,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import ContactForm from './ContactForm';

const ContactTable = ({ onUpdatedContact }) => {
  const history = useHistory();
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
    history.push('/');
  };

  const handleViewContact = (contactId) => {
    history.push(`/view/${contactId}`);
  };

  const handleUpdateContact = (contactId) => {
    history.push(`/update/${contactId}`);
  };

  const handleDeleteContact = (contactId) => {
    history.push(`/delete/${contactId}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Registered Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : contacts
            ).map((contact, index) => (
              <TableRow key={contact.id}>
                <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell>{contact.fullName}</TableCell>
                <TableCell>{contact.emailAddress}</TableCell>
                <TableCell>{contact.contactNumber}</TableCell>
                <TableCell>{contact.location}</TableCell>
                <TableCell>{contact.registeredDate}</TableCell>
                <TableCell>
                  <Button onClick={() => handleViewContact(contact.id)}>View</Button>
                  <Button onClick={() => handleUpdateContact(contact.id)}>Update</Button>
                  <Button onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ContactTable;
