import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/Home';
import Layout from "../pages/layouts/Layout";
import BookForm from "../pages/BookForm";
import Search from "../pages/Search";
import BookDetail from "../pages/BookDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";

import React, { useContext } from 'react'
import { AuthContext } from "../Context/AuthContext";

export default function index() {

    let { authReady,user } = useContext(AuthContext);
    const isAuthenticated = !!user
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: isAuthenticated ? <Home /> : <Navigate to='/login'></Navigate>
                },
                {
                    path: "/books/:id",
                    element: isAuthenticated ? <BookDetail /> : <Navigate to='/login'></Navigate>
                },
                {
                    path: "/create",
                    element: isAuthenticated ? <BookForm /> : <Navigate to='/login'></Navigate>
                },
                {
                    path: "/edit/:id",
                    element: isAuthenticated ? <BookForm /> : <Navigate to='./login'></Navigate>
                },
                {
                    path: "/search",
                    element: isAuthenticated ? <Search /> : <Navigate to='/login'></Navigate>
                },
                {
                    path: "/register",
                    element: !isAuthenticated ? <Register /> :  <Navigate to=''></Navigate>
                },
                {
                    path: "/login",
                    element: !isAuthenticated ? <Login /> :  <Navigate to=''></Navigate>
                },
            ]
        },
    ]);

    

    return (
        authReady && <RouterProvider router={router} />
    )
}