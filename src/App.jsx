import React from 'react';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Clients from './components/Home/Clients';

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      loader:()=>fetch('services.json'),
      element:<Main/>,
      children:[
        {
          path:'/',
          loader:()=> fetch('currencyData.json'),
          element:<Home/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default App;