import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route
 } from 'react-router-dom' 

 //My Components
 import Layout from './components/Layout';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout>
        <div>Buenas buenas</div>
        <p>
          <ol>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </ol>
        </p>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
