import { provider, auth } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import icon from "../media/icon.png"
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
        <div className='space-y-5 min-h-[750px] bg-slate-200 px-10 py-5 text-center'>
            <p className='font-semibold text-2xl'>Join Us.</p>
            <div>
                <div onClick={signInWithGoogle} className='mx-auto font-semibold bg-white gap-x-2 border-2 border-black p-2 rounded-3xl flex items-center justify-center w-[250px] hover:bg-gray-200'>
                    <img alt='' className='w-[25px]' src={icon} />
                    <button className=''>Sign up with Google</button>
                </div>
            </div>
        </div>
    )
};