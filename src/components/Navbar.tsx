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
        <div className='flex space-between border-b-4 px-48 py-10 mx-48 mb-10 shadow-lg font-semibold'>
            <div className='inline-flex'>
            <div><Link to='/'><button className='bg-indigo-500 text-2xl text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Main</button></Link></div>
            <div><Link to='/contact'><button className='bg-indigo-500 text-2xl text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Contact</button></Link></div>
            <div>{ !user && <Link to='/login'><button className='bg-indigo-500 text-2xl text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Login</button></Link>}</div>
            </div>
            {
                user &&
                <div className='inline-flex'>
                    <div><Link to='/createpost'><button className='bg-indigo-500 text-2xl text-gray-200 font-semibold mr-8 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Create Post</button></Link></div>
                    <div className='inline-flex'>
                        <img src={ user?.photoURL || ""} alt='Profile' width="40" height="20" />
                        <h3 className='mr-8 pl-1 pt-2 text-lg'>{ user?.displayName }</h3>
                    </div>
                    <div><button onClick={signUserOut} className='bg-indigo-500 text-2xl text-gray-200 font-semibold p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all' >Log Out</button></div>
                </div>
            }
        </div>
    )
}

export default Navbar;