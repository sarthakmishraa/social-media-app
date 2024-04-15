import { Link } from 'react-router-dom'
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'

const Navbar = () => {
    // const [user, loading, error] = useAuthState(auth);
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }

    return(
        <nav className='flex justify-center px-20 list-none py-8 font-semibold'>
            <li className='bg-indigo-500 text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500'><Link to='/'>Main</Link></li>
            <li className='bg-indigo-500 text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500'><Link to='/contact'>Contact</Link></li>
            { !user && <li className='bg-indigo-500 text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500'><Link to='/login'>Login</Link></li>}
            {
                user &&
                <>
                <img src={ user?.photoURL || ""} alt='Profile' width="40" height="20" />
                <h3 className='mr-8 pl-1 pt-2'>{ user?.displayName }</h3>
                <button onClick={signUserOut} className='bg-indigo-500 text-gray-200 font-semibold p-2 rounded-md focus:ring focus:ring-red-500' >Log Out</button></>
            }
        </nav>
    )
}

export default Navbar;