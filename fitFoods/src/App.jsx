import { Route, Routes } from 'react-router-dom';
import NavBar from './components/UI/NavBar';
import ExercisesPage from './pages/ExercisesPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import Footer from './components/UI/Footer';

import { LanguageProvider } from './context/Languaje';
import MobileNavbar from './components/UI/MobileNavbar';
import { useState } from 'react';
import ExercisesListPage from './pages/ExercisesListPage';
import './i18n/i18n';
import { UserProvider } from './context/UserContext';

function App() {
	const [mobile, setMobile] = useState(false);
	return (
		<>
			<UserProvider>
				<LanguageProvider>
					<NavBar mobile={mobile} setMobile={setMobile} />
					{mobile && <MobileNavbar />}
					<Routes>
						<Route path='/' element={<HomePage setMobile={setMobile} />} />
						<Route path='menus' element={<MenuPage setMobile={setMobile} />} />
						<Route path='exercises'>
							<Route
								path=''
								element={<ExercisesPage setMobile={setMobile} />}
							/>
							<Route
								path=':muscle'
								element={<ExercisesListPage setMobile={setMobile} />}
							/>
						</Route>

						<Route path='*' element={<h1>404</h1>} />
					</Routes>
					<Footer />
				</LanguageProvider>
			</UserProvider>
		</>
	);
}

export default App;
