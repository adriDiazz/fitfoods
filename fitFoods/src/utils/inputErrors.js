export const checkBlank = text => {
	if (text === '') {
		return 'Input required'
	}
};

export const checkEmail = email => {
	const re = /\S+@\S+\.\S+/;
	if (!re.test(email) && email !== '' && email.length > 4) {
		return 'Email address is invalid';
	}
};

export const checkPassword = password => {
	if (password.length < 6 && password !== '') {
		return 'Password must be at least 6 characters';
	} else if (password.length > 50 && password !== '') {
		return 'Password must be less than 50 characters';
	} else if (password.search(/\d/) === -1 && password !== '') {
		return 'Must contain at least one number';
	} else if (password.search(/[a-zA-Z]/) === -1 && password !== '') {
		return 'Password must contain at least one letter';
	}
};
