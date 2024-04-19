import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
    title: string;
    description: string
}

export const CreateForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("Please enter the title."),
        description: yup.string().required("Please enter the description")
    });

    const { register, handleSubmit, formState: { errors } } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, "posts")

    const onCreatePost = async (data: CreateFormData) => {
        // console.log(data);
        await addDoc(postsRef, {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid,
        });
        navigate('/');

        // // Another way to do the same thing
        // await addDoc(postsRef, {
        //     ...data,
        //     username: user?.displayName,
        //     userId: user?.uid,
        // });
    };

    return(
        <form onSubmit={handleSubmit(onCreatePost)}>
            <p className="font-semibold text-2xl mb-5">Give your world a title and share what's going on!</p>
            <input type="text" placeholder="Start with a captivating title!" {...register("title")} className="w-64 h-12 border-2 border-slate-300 rounded-md p-1" />
            <h3 className="text-red-700 font-semibold">{ errors.title?.message }</h3>
            <textarea placeholder="Share it with the community!" {...register("description")} className="w-[800px] h-96 border-2 border-slate-300 rounded-md p-1 mt-5" />
            <h3 className="text-red-700 font-semibold">{ errors.description?.message }</h3>
            <input type="submit" className="cursor-pointer bg-indigo-500 text-white text-xl font-semibold p-2 rounded-md mt-5 active:scale-75 transition-all" />
        </form>
    )
};