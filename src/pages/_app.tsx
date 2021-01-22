import React from 'react';
import Layout from './components/Layout'


import GlobalStyles from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return<div> 
            <Layout />
          <GlobalStyles/>    
  </div>
}

export default MyApp
