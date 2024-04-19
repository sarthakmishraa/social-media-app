import { Link } from 'react-router-dom'
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // const [user, loading, error] = useAuthState(auth);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const signUserOut = async () => {
        await signOut(auth);
        navigate('/login');
    }

    return(
        <div className='bg-slate-400 border-b-4 px-48 py-10 shadow-lg font-semibold'>
            <div className='inline-block'>
                <div className='inline-block'>
                    <Link to='/'>
                        <button className='bg-indigo-500 text-lg text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Main</button>
                    </Link>
                </div>
                <div className='inline-block'>
                    <Link to='/contact'>
                        <button className='bg-indigo-500 text-lg text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Contact</button>
                    </Link>
                </div>
                <div className='inline-block'>{ !user && <Link to='/login'>
                    <button className='bg-indigo-500 text-lg text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Login</button>
                </Link>}
                </div>
            </div>
            <h3 className='inline-block font-semibold text-3xl'>SM Social Media</h3>
            {
                user &&
                <div className='inline-block float-right'>
                    <div className='inline-block'>
                        <Link to='/createpost'>
                            <button className='bg-indigo-500 text-lg text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Create Post</button>
                        </Link>
                    </div>
                    
                    <div className='inline-block'>
                        <img className='inline-block' src={ user?.photoURL || ""} alt='Profile' width="40" height="20" />
                        <h3 className='inline-block mr-8 pl-1 pt-2 text-lg'>{ user?.displayName }</h3>
                    </div>

                    <div className='inline-block'>
                        <button onClick={signUserOut} className='bg-indigo-500 text-lg text-gray-200 font-semibold p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all' >Log Out</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar;