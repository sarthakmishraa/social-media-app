import { provider, auth } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        // const result = await signInWithPopup(auth, provider);
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
        }
        catch(error) {
            console.log(error);
        }
        navigate('/');
    }

    return(
        <div className='px-10 py-5 text-center space-x-4'>
            <button className='bg-indigo-500 text-gray-200 font-semibold p-2 shadow-lg rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all' onClick={signInWithGoogle} >Sign In with Google</button>
        </div>
    )
};