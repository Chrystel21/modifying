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
import viewContact from './viewContact';
import deleteContact from './deleteContact';
import updateContact from './updateContact';
import contactForm from './contactForm';

const contactTable = ({ onUpdatedContact }) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isUpdateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [isViewDialogOpen, setViewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const saveContactsToLocalStorage = (updatedContacts) => {
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setViewDialogOpen(true);
  };

  const handleOpenUpdateDialog = (contactId) => {
    const selectedContact = contacts.find((contact) => contact.id === contactId);
    setSelectedContact(selectedContact);
    setOpenUpdateDialog(true);
  };

  const handleCloseUpdateDialog = () => {
    setOpenUpdateDialog(false);
    setSelectedContact(null);
  };

  const handleUpdateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
    setSelectedContact(null);
    setOpenUpdateDialog(false);
    onUpdatedContact(updatedContacts);
  };

  const handleDeleteContact = (contact) => {
    setSelectedContact(contact);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    const updatedContacts = contacts.filter((contact) => contact.id !== selectedContact.id);
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
    setSelectedContact(null);
    setDeleteDialogOpen(false);
    onUpdatedContact(updatedContacts);
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Registered Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((contact, index) => (
                <TableRow key={contact.id}>
                  <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                  <TableCell>{contact.fullName}</TableCell>
                  <TableCell>{contact.emailAddress}</TableCell>
                  <TableCell>{contact.contactNumber}</TableCell>
                  <TableCell>{contact.location}</TableCell>
                  <TableCell>{contact.registeredDate}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleViewContact(contact)}>View</Button>
                    <Button onClick={() => handleOpenUpdateDialog(contact.id)}>Update</Button>
                    <Button onClick={() => handleDeleteContact(contact)}>Delete</Button>
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

      <viewContact
        contact={selectedContact}
        isOpen={isViewDialogOpen}
        onClose={() => setViewDialogOpen(false)}
      />

      <deleteContact
        contact={selectedContact}
        isOpen={isDeleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onDelete={handleDeleteConfirm}
      />

      <updateContact
        contact={selectedContact}
        onUpdateContact={handleUpdateContact}
        onClose={handleCloseUpdateDialog}
        open={openUpdateDialog}
      />
    </div>
  );
};

export default contactTable;