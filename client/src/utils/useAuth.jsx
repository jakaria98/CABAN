import axios from 'axios';

const useAuth = async () => {
    try {
        const user = await axios.get('http://localhost:3000/api/user/me', {
            withCredentials: true,
        });
        return Object.keys(user).length > 0;
    } catch (error) {
        console.log(error);
        return false; // Handle errors, for example, by treating the userme as not authenticated
    }
};

export default useAuth;
