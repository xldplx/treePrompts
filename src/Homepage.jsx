import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <section className="h-screen flex flex-col justify-center items-center">
                <div className="flex text-[3rem] font-[900] drop-shadow-2xl">
                    <h1 className="text-yellow-500">tree</h1>
                    <h1 className="text-green-500">Prompts</h1>
                </div>
                <h1 className="tracking-widest italic text-slate-600 mt-4">your all-in-one root(home) of prompts.</h1>
                <Link to="/prompts" className="bg-green-500 text-white px-[2rem] py-[1rem] rounded mt-[2rem] hover:scale-105 transition-all duration-300">
                    <h1>browse all prompts</h1>
                </Link>
            </section>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <h1 className="text-slate-400">made by xldplx.</h1>
            </div>
        </>
    );
}