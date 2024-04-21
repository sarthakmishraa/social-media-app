import logo from "../media/logo.png";

export const Footer = () => {
    return(
        <div className="mt-auto w-[100%] bg-gradient-to-t from-indigo-400 to-slate-200 border-2 border-t-slate-300 border-4 border-b-slate-700 px-48 py-5 font-semibold">
            <h3 className="text-3xl mb-5 float-left">SM Social Media</h3>
            <div className="flex justify-evenly">
                <div className="inline-block align-top">
                    <h2 className="text-2xl mb-3">My Other Projects</h2>
                    <div className="grid text-lg">
                        <div className="py-1">
                            <p className="inline block mr-2">SM Sec</p>
                            <a className="inline block mr-1 underline hover:text-white" href="https://github.com/sarthakmishraa/SM_SEC" target="_blank" rel="noreferrer">GitHub</a>
                            <a className="inline block underline hover:text-white" href="https://smsec.netlify.app/" target="_blank" rel="noreferrer">Live</a>
                        </div>
                        <div className="py-1">
                            <p className="inline block mr-2">Career Crafter</p>
                            <a className="inline block mr-1 underline hover:text-white" href="https://github.com/sarthakmishraa/career-crafter" target="_blank" rel="noreferrer">GitHub</a>
                            <a className="inline block underline hover:text-white" href="https://atsmatch.streamlit.app/" target="_blank" rel="noreferrer">Live</a>
                        </div>
                        <div className="py-1">
                            <p className="inline block mr-2">Fluence</p>
                            <a className="inline block mr-1 underline hover:text-white" href="https://github.com/sarthakmishraa/fluence" target="_blank" rel="noreferrer">GitHub</a>
                            <a className="inline block underline hover:text-white" href="https://flu-ence.netlify.app/" target="_blank" rel="noreferrer">Live</a>
                        </div>
                    </div>
                </div>
                <div className="inline-block align-top">
                    <h2 className="text-2xl mb-3">Contact Me</h2>
                    <div className="grid text-lg underline">
                        <a className="hover:text-white" href="mailto: mishra23@buffalo.edu" target="_blank" rel="noreferrer">Email</a>
                        <a className="hover:text-white" href="https://www.linkedin.com/in/sarthakmishraa/" target="_blank" rel="noreferrer">My LinkedIn</a>
                        <a className="hover:text-white" href="https://github.com/sarthakmishraa" target="_blank" rel="noreferrer">My GitHub</a>
                        <a className="hover:text-white" href="http://sarthakmishra.lovestoblog.com/?i=2" target="_blank" rel="noreferrer">My Portfolio</a>
                    </div>
                </div>
                <div className="inline-block text-center">
                    <img src={logo} alt="" className="mx-auto flex justify-center items-center w-32" />
                    <figcaption className="mt-3">Made with❤️by Sarthak Mishra</figcaption>
                </div>
            </div>
        </div>
    )
};