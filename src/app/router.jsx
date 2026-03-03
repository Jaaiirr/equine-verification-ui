import { createBrowserRouter } from 'react-router-dom';
import LayoutAdminPage from '../features/horses/pages/LayoutAdminPage';
import HomePage from '../features/horses/pages/HomePage';
import LoginPage from '../features/horses/pages/auth/LoginPage';
import MarketPlacePage from '../features/horses/pages/MarketPlacePage';
import DetailsPage from '../features/horses/pages/DetailsPage';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <LayoutAdminPage />,
			children: [
				{ index: true, element: <HomePage /> },
				{ path: 'marketplace', element: <MarketPlacePage /> },
				// { path: '/horse/:id',	element: <HorseDetailPage /> },
				{ path: 'login',	element: <LoginPage />	},
				{ path: 'details',	element: <DetailsPage />	},
				// { path: '/register',	element: <RegisterPage /> },
				// { path: '/publicar',	element: <PublicPage /> }
			],
		},
	],
	{
		basename: "/equine-verification-ui",
	});

export default router;