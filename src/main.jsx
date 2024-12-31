import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Child1 from './Child1.jsx';
import AddCoffee from './AddCoffee.jsx';
import UpdateCoffee from './UpdateCoffee.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <p>hello world</p>,
//     children:[
//       {
//         path: 'addcoffee',
//         element:<p>add coffee</p>
//       },
//       {
//         path:'update',
//         element:<p>update coffee</p>
//       }
//     ]
//   },
// ]);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path:'/addcoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/updatecoffee',
    element:<UpdateCoffee></UpdateCoffee>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
