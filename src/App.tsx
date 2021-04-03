import React from 'react';
import ToastContainer from './components/ToastContainer';
import Routes from './routes';
import { StoresProvider } from './stores';

import GlobalStyle from './styles/global';

function App() {
  return (
    <StoresProvider>
      <Routes />
      <ToastContainer />
      <GlobalStyle />
    </StoresProvider>
  );
}

export default App;
