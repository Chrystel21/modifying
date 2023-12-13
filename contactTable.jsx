import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TablePagination } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
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
    // No need to use history.push('/') after adding a contact
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
                  <Link to={`/view/${contact.id}`}>
                    <Button>View</Button>
                  </Link>
                  <Link to={`/update/${contact.id}`}>
                    <Button>Update</Button>
                  </Link>
                  <Link to={`/delete/${contact.id}`}>
                    <Button>Delete</Button>
                  </Link>
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
