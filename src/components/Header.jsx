export default function Header() {
    return (
        <header className="flex justify-center px-2">
            <div className="flex justify-between items-center h-20 w-full max-w-[--max-w] ">
                <a href="#" className="uppercase font-mono font-bold text-xl ">
                    Hugo Torres
                </a>

                <nav className="flex gap-3 ">
                    <Option name="Home" to="#" isActive />
                    <Option name="About me" to="#" />
                    <Option name="What I do" to="#" />
                    <Option name="Portfolio" to="#" />
                    <Option name="My Resume" to="#" />
                    <Option name="Blog" to="#" />
                    <Option name="Contact Me" to="#" />
                </nav>
            </div>
        </header>
    );
}

function Option({ name, to, isActive = false }) {
    return (
        <a
            className={
                "opacity-80 ransition duration-300 hover:text-[--c1-txt] " +
                (isActive ? "text-[--c1-txt] opacity-100 " : "")
            }
            href={to}
        >
            {name}
        </a>
    );
}
