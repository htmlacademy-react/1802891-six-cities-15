import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App offers={offers} />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
