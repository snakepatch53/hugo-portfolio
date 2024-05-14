"@fortawesome/free-brands-svg-icons";
import info from "../mocks/info.json";
import socials from "../mocks/social-media.json";

export default function Hero() {
    return (
        <div className="relative z-10 flex justify-center px-5">
            <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-[--max-w] ">
                <div className="flex-1 flex flex-col md:flex-row items-center gap-0 md:gap-3 ">
                    <div className="flex flex-row md:flex-col gap-3 ">
                        {socials.map(({ id, icon, url }) => (
                            <SocialItem key={id} icon={icon} url={url} />
                        ))}
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="font-mono text-[--c1-txt] text-2xl ">
                            I am <span className="font-logo text-4xl">{info.name}</span>
                        </h3>
                        <h4 className=" font-title text-3xl uppercase tracking-widest ">
                            Junior Developer
                        </h4>
                        <p className=" font-content text-balance text-lg mt-3 ">
                            Yo soy un programador muy motivado por aprender nuevas tecnologias y
                            mantere siempre mi conocimiento actualizado.
                        </p>
                    </div>
                </div>
                <div className=" opacity-70 max-w-80 ">
                    <img
                        className="w-full h-full "
                        style={{
                            maskImage: "linear-gradient(to bottom, black, transparent)",
                        }}
                        alt="profile"
                        src={info.photo_profile}
                    />
                </div>
            </div>
        </div>
    );
}

function SocialItem({ icon, url }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className=" fill-[--c1-txt2] text-lg transition duration-200 hover:fill-[--c1-txt] hover:scale-150 "
        >
            <div
                className="w-5 aspect-square "
                dangerouslySetInnerHTML={{
                    __html: icon,
                }}
            />
        </a>
    );
}
