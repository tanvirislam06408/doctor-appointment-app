import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import MyBoooking from '../Pages/MyBookking/MyBoooking';
import Blogs from '../Pages/Blogs/Blogs';
import Contact from '../Pages/ContactPage/Contact';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {index:true, Component: Home},
        {path:"/booking", Component: MyBoooking},
        {path:"/blogs", Component: Blogs},
        {path:"/contact", Component: Contact}

    ]
  },
]);