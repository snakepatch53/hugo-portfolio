import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "../lib/utils";
import { useState } from "react";
import info from "../mocks/info.json";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 flex justify-center px-2 backdrop-blur-sm">
            <div className="flex justify-between items-center h-20 w-full max-w-[--max-w] ">
                <a href="#" className="uppercase font-mono font-bold text-xl text-[--c1-txt] ">
                    {info.name}
                </a>

                <nav
                    className={cls(
                        "md:static md:flex md:flex-row md:w-auto md:opacity-100 md:max-w-none md:bg-transparent md:backdrop-blur-none ",
                        "fixed top-0 bottom-0 right-0 flex flex-col justify-center items-center gap-3  h-full w-full bg-black/50 backdrop-blur overflow-hidden transition-all ",
                        {
                            "max-w-0 opacity-0": !isMenuOpen,
                            "max-w-72 opacity-100": isMenuOpen,
                        }
                    )}
                >
                    <Option name="Home" to="#" isActive />
                    <Option name="About me" to="#" />
                    <Option name="What I do" to="#" />
                    <Option name="Portfolio" to="#" />
                    <Option name="My Resume" to="#" />
                    <Option name="Blog" to="#" />
                    <Option name="Contact Me" to="#" />
                </nav>
                <button
                    className="relative z-10 flex justify-center items-center md:hidden w-10 aspect-square rounded transition hover:bg-black/20 "
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    );
}

function Option({ name, to, isActive = false }) {
    return (
        <a
            className={
                "opacity-80 ransition duration-300 hover:text-[--c1-txt] hover:scale-110 " +
                (isActive ? "text-[--c1-txt] opacity-100 " : "")
            }
            href={to}
        >
            {name}
        </a>
    );
}
