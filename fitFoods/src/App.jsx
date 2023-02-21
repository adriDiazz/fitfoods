import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ExercisesPage from './pages/ExercisesPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='menus' element={<MenuPage />} />
				<Route path='exercises' element={<ExercisesPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
