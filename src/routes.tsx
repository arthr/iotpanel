import { RouteObject } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MockGrids from './pages/MockGrids';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/mock-grids',
        element: <MockGrids />,
    },
];