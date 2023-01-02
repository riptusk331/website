import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { SiteNavbar } from './Navbar';
import Container from "react-bootstrap/Container"
import reportWebVitals from './reportWebVitals';
import App from "./App.js"
import NotFound from './pages/NotFound.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const HeaderLayout = () => (
  <>
    <SiteNavbar />
    <Container className="mt-4">
      <Outlet />
    </Container>
  </>
);

const router = createBrowserRouter([{
  path: "/",
  element: <HeaderLayout />,
  children: [
    {
      index: true,
      element: <App />
    },
    {
      path: "/blog",
      element: <div>Blog will be coming soon</div>
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
