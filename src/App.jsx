import React from 'react';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Clients from './components/Home/Clients';
import Login from './User/Login';
import Registration from './User/Registration';

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
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/registration',
          element:<Registration/>
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