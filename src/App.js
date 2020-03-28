import React from 'react'; 
import './App.css'; 
import Layout from './components/Layout/Layout';
 
  
export default ( {children} ) => {
  return (
    <div className="App">
      <Layout>
        Cake Builder
      </Layout>
      <Layout>
         Drawer
      </Layout>
        {children}
    </div>
  );
}
