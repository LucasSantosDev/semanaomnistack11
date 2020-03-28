import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/global.css';

import Routes from './routes';

function App() {
  return (
    <>
      <ToastContainer autoClose={8000} />
      <Routes />
    </>
  );
}

export default App;
