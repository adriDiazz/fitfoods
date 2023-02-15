import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExercisesPage from './pages/ExercisesPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: '/exercises',
		element: <ExercisesPage />
	},
	{
		path: '/menus',
		element: <MenuPage />
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
