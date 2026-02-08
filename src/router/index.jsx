import { createBrowserRouter } from 'react-router-dom';
import HorseList from '../pages/HorseList';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HorseList/> // To-do: Home component
	},
	{
		path: '/marketplace',
		element: '' // To-do: Horse List
	},
	{
		path: '/horses/:horseId ',
		element: '' // To-do: Horse Profile (detail)
	},
	{
		path: '/sellers/:id',
		element: '' // To-do: Seller Profile
	},
	{
		path: '/verification',
		element: '' // To-do: How verification works
	},
]);

export default router;