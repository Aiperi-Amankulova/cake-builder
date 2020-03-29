import React from 'react'; 
import './App.css'; 
import Layout from './components/Layout/Layout';
import CakeBuilder from './containers/CakeBuilder/CakeBuilder';
 
 
  
export default () => {
  return (
    <div className= "App">
      <Layout>
         <CakeBuilder/>
      </Layout>
    
    </div>
  );
}
