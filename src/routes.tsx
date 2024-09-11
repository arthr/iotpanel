import { RouteObject } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MockGrids from './pages/MockGrids';
import MonitoringList from './pages/MonitoringList';
import MonitoringDevice from './pages/MonitoringDevice';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/mock-grids',
        element: <MockGrids />,
    },
    {
        path: '/monitoring',
        element: <MonitoringList />,
    },
    {
        path: '/monitoring/:deviceId',
        element: <MonitoringDevice />,
    }
];