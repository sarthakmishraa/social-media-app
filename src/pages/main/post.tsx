import { InterfacePost as interfacePost} from "./main";

interface Props {
    post: interfacePost;
}

export const Post = (props: Props) => {
    const { post } = props;
    return(
        <div>
            <div className="py-5 px-5 mx-40 my-5 bg-indigo-300 shadow-lg rounded-lg">
                <div className="font-semibold text-3xl text-slate-600">
                    { post.title }
                </div>

                <div className="font-semibold text-2xl text-left text-slate-600">
                    Author: { post.username }
                </div>
                
                <div className="mt-10 font-semibold text-left text-xl text-slate-600">
                    { post.description }
                </div>
            </div>
        </div>
    )
}