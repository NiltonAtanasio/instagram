import React from 'react';

import './App.css';
import './css/fontawesome.min.css'
import './css/normalize.css'

import { Topbar, Stories, Feed } from './componenets';

function App() {
  return (
    <React.Fragment>
      <Topbar />

      <Stories />

      <Feed />
    </React.Fragment>
    );
}

export default App;
