import { fetchWithToken } from "./fetchInterceptor";

export const getAllUsers = async (setUsers) => {
    try {
        const response = await fetchWithToken(import.meta.env.VITE_GET_USERS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
        });
        const res = await response.json();
        console.log(res);
        setUsers(res);
    } catch (err) {
        console.error(err);
    }
}

export const updateAdminToUser = async (id, setUsers) => {
    try {
        console.log(import.meta.env.VITE_GET_USERS_URL + '/' + id);
        const response = await fetchWithToken(import.meta.env.VITE_GET_USERS_URL + '/' + id , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
        });
        const res = await response.json();
        console.log(res);
        setUsers(res);
    } catch (err) {
        console.error(err);
    }
}

export const updateNoAdminToUser = async (id, setUsers) => {
    try {
        console.log(import.meta.env.VITE_GET_USERS_URL + '/' + id);
        const response = await fetchWithToken(import.meta.env.VITE_GET_USERS_URL + '/' + id , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
        });
        const res = await response.json();
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}


