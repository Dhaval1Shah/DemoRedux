import React, { useState, useEffect } from 'react';
import Contacts from './components/contacts/Contacts';
import { Navbar } from './components/elements/Navbar';
import "./styles/App.scss";
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Pagenotfound } from './Pagenotfound';
import AddContact from './components/contacts/AddContact';
import ProtectedRoute from './components/ProtectedRoute';
import EditContact from './components/contacts/Edit'

const inivalue = {
  location: document.location.pathname,
}



function App(props) {
  const [path, setPath] = useState(inivalue)



  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path='/' render={(props) => (
                  <Contacts />
                )} />
                <ProtectedRoute
                  {...props}
                  exact
                  path="/contacts/add"
                  component={AddContact}
                />
                <ProtectedRoute
                  {...props}
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
                <Route exact path='*' component={Pagenotfound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
