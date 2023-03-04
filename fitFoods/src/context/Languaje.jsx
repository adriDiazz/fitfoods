import { useState, createContext, useContext } from 'react';

export const LanguageContext = createContext({
	userLanguage: 'es'
});

/* eslint-disable react/prop-types */
export function LanguageProvider({ children }) {
	const defaultLanguage = window.localStorage.getItem('fitfoods-lang');
	const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'es');

	const provider = {
		userLanguage,
		userLanguageChange: selected => {
			const newLanguage = selected || 'es';
			setUserLanguage(newLanguage);
			window.localStorage.setItem('fitfoods-lang', newLanguage);
		}
	};

	return (
		<LanguageContext.Provider value={provider}>
			{children}
		</LanguageContext.Provider>
	);
}

export function ProvideText({ es, en }) {
	const languageContext = useContext(LanguageContext);
	return languageContext.userLanguage === 'es' ? es : en;
}
