import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "../lib/utils";
import { useState } from "react";
import info from "../mocks/info.json";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header
            className="sticky top-0 z-20 flex justify-center px-2 backdrop-blur-sm  "
            style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)",
            }}
        >
            <div className="flex justify-between items-center h-20 w-full max-w-[--max-w] ">
                <a href="#" className=" font-logo text-4xl text-[--c1-txt] ">
                    {info.name}
                </a>

                <nav
                    className={cls(
                        "md:static md:flex md:flex-row md:w-auto md:opacity-100 md:max-w-none md:bg-transparent md:backdrop-filter-none ",
                        "fixed top-0 bottom-0 right-0 flex flex-col justify-center items-center gap-3  h-screen w-full bg-black/50 backdrop-blur overflow-hidden transition-all ",
                        {
                            "max-w-0 opacity-0": !isMenuOpen,
                            "max-w-72 opacity-100": isMenuOpen,
                        }
                    )}
                >
                    <Option name="Home" to="#" isActive />
                    <Option name="Skills" to="#skills" />
                    <Option name="Portfolio" to="#portfolio" />
                    <Option name="Resume" to="#resume" />
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
                " font-content opacity-90 transition duration-300 hover:text-[--c1-txt] hover:scale-110 " +
                (isActive ? "text-[--c1-txt] opacity-100 " : "")
            }
            href={to}
        >
            {name}
        </a>
    );
}
