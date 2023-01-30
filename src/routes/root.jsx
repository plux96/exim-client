import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppViewProvider } from '../contexts/AppViewContext';
import { DashboardProvider } from '../contexts/DashboardContext';

// APP AND ROUTE PAGES
import ErrorPage from './error';
import Home from '../pages/home/home';
import AuthPage from '../pages/auth';
import AppView, {
    loader as appLoader
} from '../pages/app/index';
import  Submits, {
    loader as submitLoader
} from '../pages/app/submission/submission';
import Certification from '../pages/app/certification';
import AdminAuth from '../pages/admin/auth';
// DASHBOARD PAGES COMPONENTES
import Dashboard, {
    loader as dashboardLoader
} from '../pages/admin/dashboard/index';
import Requests from '../pages/admin/dashboard/requests/requests';

export function root() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage/>
        },
        {
            path: 'auth',
            children: [
                {
                    path: 'user',
                    element: <AuthPage/>
                },
                {
                    path: 'admin',
                    element: <AdminAuth/>
                }
            ]
        },
        {
            path: "app",
            loader: appLoader,
            element: (
                <AppViewProvider>
                    <AppView/>
                </AppViewProvider>
            ),
            children: [
                {
                    path: 'submissions',
                    loader: submitLoader,
                    element: <Submits/>
                },
                {
                    path: 'certification',
                    element: <Certification/>
                },
                {
                    path: 'support',
                    element: <p>Online Support</p>
                }
            ]
        },
        {
            path: 'dashboard',
            loader: dashboardLoader,
            element: (
                <DashboardProvider>
                    <Dashboard/>
                </DashboardProvider>
            ),
            children: [
                {
                    path: 'applications',
                    element: <Requests/>
                },
                {
                    path: 'accepted-applications',
                    element: <p>ACCEPTED REQUESTS</p>
                },
                {
                    path: 'all-applications',
                    element: <p>ALL REQUESTS</p>
                }
            ]
        }
    ]);
    return <RouterProvider router={router}/>;
}