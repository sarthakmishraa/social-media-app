import { getDocs, collection } from 'firebase/firestore'
import { db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { useState, useEffect } from "react";
import { Post } from './post';

export interface InterfacePost {
    id: string;
    description: string;
    userId: string;
    title: string;
    username: string;
}

export const Main = () => {
    const [postsList, setPostsList] = useState<InterfacePost[] | null>(null);
    const postsRef = collection(db, "posts");

    const [user] = useAuthState(auth);

    const getPosts = async () => {
        // const data = await getDocs(postsRef);
        // console.log(data);

        try {
            const data = await getDocs(postsRef);
            // console.log(data);
            // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
            setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})) as InterfacePost[]);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);


    return(
        <div className="px-10 py-5 text-center space-x-4 bg-slate-200">
            {
                postsList ? (
                    <>
                        <img className="float-left" src={user?.photoURL || ""} alt="LoggedInUser" />
                        <h3 className='font-semibold text-2xl my-2'>Hi {user?.displayName}, What's on your mind ?</h3>
                        {
                            postsList.map((post) => (
                                <>
                                    <Post post={post} />
                                </>
                            ))
                        }
                    </>
                ) : (
                    <h2 className='font-semibold text-3xl'>Log In to see posts</h2>
                )
            }
        </div>
    )
};