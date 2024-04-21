import profilePic from "../media/profile-pic.jpg"; 

export const Contact = () => {
    return(
        <div className="min-h-[750px] bg-slate-200 font-semibold px-10 py-5 text-center space-x-4">
            <h1 className="text-2xl font-semibold py-5">Contact Me</h1>
            <div className="flex justify-center items-center gap-5">
                <div>
                    <img className="rounded-lg w-64 shadow-2xl" src={profilePic} alt="Dev" />
                    <figcaption className="text-lg">Sarthak Mishra</figcaption>
                </div>
                <div className="text-xl">
                    <a href="https://www.linkedin.com/in/sarthakmishraa/" target="_blank" rel="noopener noreferrer">
                       <button className="bg-indigo-500 text-lg text-gray-200 font-semibold mx-2 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all">LinkedIn</button>
                    </a>
                    <a href="https://github.com/sarthakmishraa" target="_blank" rel="noopener noreferrer">
                        <button className="bg-indigo-500 text-lg text-gray-200 font-semibold mx-2 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all">GitHub</button>
                    </a>
                    <a href="http://sarthakmishra.lovestoblog.com/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-indigo-500 text-lg text-gray-200 font-semibold mx-2 p-2 rounded-md focus:ring focus:ring-red-500 active:scale-75 transition-all">Portfolio</button>
                    </a>
                </div>
                <p></p>
            </div>
        </div>
    )
};