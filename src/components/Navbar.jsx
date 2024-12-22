import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="fixed top-0 left-0 w-full h-16 flex justify-center items-center transition-opacity duration-300"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <header
                className="absolute top-5 transition-all duration-300"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                    pointerEvents: isVisible ? "auto" : "none",
                }}
            >
                <nav className="border shadow-md px-[2rem] py-[1rem] rounded-lg bg-white">
                    <ul className="flex gap-[2rem] text-slate-600">
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/prompts">prompts</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/contact">coontact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}