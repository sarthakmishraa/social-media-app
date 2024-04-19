import { InterfacePost as interfacePost} from "./main";
import { auth } from "../../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from "../../config/firebase";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

interface Props {
    post: interfacePost;
}

export const Post = (props: Props) => {
    const [likes, setLikes] = useState<number | null>(null);

    const { post } = props;
    const [user] = useAuthState(auth);

    const likesRef = collection(db, "likes");

    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        // console.log(data.docs);
        // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        setLikes(data.docs.length);
    }

    const addLike = async () => {
        await addDoc(likesRef, {
            userId: user?.uid,
            postId: post.id
        });
    }

    useEffect(() => {
        getLikes();
    }, []);

    return(
        <div>
            <div className="py-5 px-5 mx-40 my-5 bg-indigo-300 shadow-lg rounded-lg">
                <div className="font-bold text-3xl text-slate-600">
                    { post.title }
                </div>
                <div className="mt-10 font-semibold text-left text-xl text-slate-600">
                    { post.description }
                </div>
                <div className="inline-flex gap-2">
                    <img src={ user?.photoURL || "" } width={50} alt="postDP" />
                    <p className="font-semibold text-2xl text-left text-slate-600">Author: { post.username }</p>
                    <button onClick={addLike} className='text-md bg-indigo-500 text-gray-200 font-semibold p-1 shadow-lg rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Like&#128077;</button>
                    {likes && <p>Likes: {likes}</p>}
                </div>
            </div>
        </div>
    )
}