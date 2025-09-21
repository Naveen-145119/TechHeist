import { account } from '../appwriteConfig';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleRegisterClick = async () => {
    try {
        await account.get(); // This will succeed if logged in, fail if not
        navigate(`/register/${eventId}`); // Go to the form
    } catch (error) {
        navigate('/login'); // If it fails, send them to the login page
    }
};