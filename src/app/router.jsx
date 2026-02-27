import { createBrowserRouter } from 'react-router-dom';
import LayoutAdminPage from '../features/horses/pages/LayoutAdminPage';
import HomePage from '../features/horses/pages/HomePage';
import LoginPage from '../features/horses/pages/auth/LoginPage';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <LayoutAdminPage />,
			children: [
				{
					index: true,
					element: <HomePage />
				}
			],
		},
		{
			path: '/login',
			element: <LoginPage />,
		}
	],
	{
		basename: "/equine-verification-ui",
	});

export default router;