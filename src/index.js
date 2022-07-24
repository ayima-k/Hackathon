import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from "./store";
import './index.css';
import {AuthProviders} from "./providers/AuthProviders";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <AuthProviders>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </AuthProviders>
  </React.Fragment>
);

