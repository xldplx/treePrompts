import { useState } from "react";

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
                            <a href="">prompts</a>
                        </li>
                        <li>
                            <a href="">about</a>
                        </li>
                        <li>
                            <a href="">contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}