import { InterfacePost as interfacePost} from "./main";
import { auth } from "../../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from "../../config/firebase";
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";

interface Props {
    post: interfacePost;
}

interface Likes {
    userId: string;
    likeId: string;
}

export const Post = (props: Props) => {
    const [likes, setLikes] = useState<Likes[] | null>(null);

    const { post } = props;
    const [user] = useAuthState(auth);

    const likesRef = collection(db, "likes");

    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        // console.log(data.docs);
        // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id })));
    };

    const addLike = async () => {
        try {
            const newDoc = await addDoc(likesRef, {
                userId: user?.uid,
                postId: post.id
            });
            if (user) {
                setLikes((prev) => prev ? [...prev, { userId: user?.uid, likeId: newDoc.id }] : [{ userId: user?.uid, likeId: newDoc.id }]);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const removeLike = async () => {
        try {
            const likeToDeleteQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));
            const likeToDeleteData = await getDocs(likeToDeleteQuery);
            const likeId = likeToDeleteData.docs[0].id;
            const likeToDelete = doc(db, "likes", likeId);
            await deleteDoc(likeToDelete);

            if (user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId));
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const isLiked = likes?.find((like) => like.userId === user?.uid)

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
                    <p className="font-semibold text-2xl text-left text-slate-600">Author: { post.username }</p>
                </div>
                <div>
                    {
                        !isLiked ? (
                            <button onClick={addLike} className='text-lg bg-indigo-500 text-gray-200 font-semibold p-1 shadow-lg rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Like&#128077;</button>
                        ) : (
                            <button onClick={removeLike} className='text-lg bg-indigo-500 text-gray-200 font-semibold p-1 shadow-lg rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all'>Dislike&#128078;</button>
                        )
                    }
                    {likes && <p className="font-semibold text-xl py-3">Likes: {likes.length}</p>}
                </div>
            </div>
        </div>
    )
}