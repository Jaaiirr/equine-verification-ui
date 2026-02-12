import { createBrowserRouter } from 'react-router-dom';
import { HorseListPage } from '../features/horses/pages/HorseListPage';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <HorseListPage />
		},
	],
	{
		basename: "/equine-verification-ui",
	});

export default router;