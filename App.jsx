import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';
import ViewContact from './ViewContact';
import UpdateContact from './UpdateContact';
import DeleteContact from './DeleteContact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ContactTable} />
        <Route path="/add" component={ContactForm} />
        <Route path="/view/:id" component={ViewContact} />
        <Route path="/update/:id" component={UpdateContact} />
        <Route path="/delete/:id" component={DeleteContact} />
      </Switch>
    </Router>
  );
}

export default App;
