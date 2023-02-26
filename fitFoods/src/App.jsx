import { Route, Routes } from 'react-router-dom';
import NavBar from './components/UI/NavBar';
import ExercisesPage from './pages/ExercisesPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import Footer from './components/UI/Footer';
import Login from './components/UI/Login';
import Register from './components/UI/Register';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='menus' element={<MenuPage />} />
				<Route path='exercises' element={<ExercisesPage />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
