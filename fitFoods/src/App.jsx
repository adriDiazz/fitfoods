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
import ExercisesDetailsPage from './pages/ExercisesDetailsPage';
import GuardedRoute from './Routes/GuardedRoute';
import AdminPage from './pages/AdminPage';

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
						<Route
							element={
								<GuardedRoute routeType={0} redirectRoute='/'></GuardedRoute>
							}
						>
							<Route
								path='menus'
								element={<MenuPage setMobile={setMobile} />}
							></Route>
						</Route>

						<Route path='exercises'>
							<Route
								path=''
								element={<ExercisesPage setMobile={setMobile} />}
							/>
							<Route path=':muscle'>
								<Route
									path=''
									element={<ExercisesListPage setMobile={setMobile} />}
								/>

								<Route
									path=':exercise'
									element={<ExercisesDetailsPage setMobile={setMobile} />}
								/>
							</Route>
						</Route>

						<Route
							element={
								<GuardedRoute routeType={1} redirectRoute='/'></GuardedRoute>
							}
						>
							<Route path='admin' element={<AdminPage />} />
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
