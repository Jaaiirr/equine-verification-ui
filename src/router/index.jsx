import { createBrowserRouter } from 'react-router-dom';
import HorseList from '../pages/HorseList';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HorseList/>
	}
]);

export default router;