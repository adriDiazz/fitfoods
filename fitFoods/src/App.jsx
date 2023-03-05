import { Route, Routes } from 'react-router-dom';
import NavBar from './components/UI/NavBar';
import ExercisesPage from './pages/ExercisesPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import Footer from './components/UI/Footer';

import { LanguageProvider } from './context/Languaje';

function App() {
	return (
		<>
			<LanguageProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='menus' element={<MenuPage />} />
					<Route path='exercises' element={<ExercisesPage />} />
				</Routes>
				<Footer />
			</LanguageProvider>
		</>
	);
}

export default App;
