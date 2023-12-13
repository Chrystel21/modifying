import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';
import UpdateContact from './UpdateContact';
import DeleteContact from './DeleteContact';
import ViewContact from './ViewContact';
import './styles.css'; // Make sure to import your global styles here

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/add" exact>
          <ContactForm />
        </Route>
        <Route path="/view/:id" exact>
          <ViewContact />
        </Route>
        <Route path="/update/:id" exact>
          <UpdateContact />
        </Route>
        <Route path="/delete/:id" exact>
          <DeleteContact />
        </Route>
        <Route path="/" exact>
          <ContactTable />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
