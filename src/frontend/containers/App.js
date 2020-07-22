import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../components/Router';
import '../assets/styles/App.scss';
import Layout from '../components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  );
}
export default App;
