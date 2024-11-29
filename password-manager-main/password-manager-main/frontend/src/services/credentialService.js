import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getCredentials = async (token) => {
    const response = await axios.get(`${API_URL}/credentials/`, {
        headers: { Authorization: `Token ${token}` },
    });
    return response.data;
};
