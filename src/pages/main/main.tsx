import { getDocs, collection } from 'firebase/firestore'
import { db } from "../../config/firebase";
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
        <div className="px-10 py-5 text-center space-x-4">
            {
                postsList ? (
                    postsList.map((post) => (
                        <>
                            <h1 className="text-4xl font-semibold">Posts</h1>
                            <Post post={post} />
                        </>
                    ))
                ) : (
                    <h2 className='font-semibold text-3xl'>Log In to see posts</h2>
                )
            }
        </div>
    )
};