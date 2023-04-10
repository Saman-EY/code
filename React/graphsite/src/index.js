import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/fonts.css';
import './styles/index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import theme from './mui/theme';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
  </BrowserRouter>
);
