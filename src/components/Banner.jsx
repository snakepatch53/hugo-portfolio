import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Banner() {
    return (
        <div className="flex justify-center px-5">
            <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-[--max-w] ">
                <div className="flex-1 flex flex-col md:flex-row items-center gap-0 md:gap-3 ">
                    <div className="flex flex-row md:flex-col gap-3 md:gap-0">
                        <SocialItem icon={faFacebook} url="#" />
                        <SocialItem icon={faInstagram} url="#" />
                        <SocialItem icon={faTwitter} url="#" />
                        <SocialItem icon={faYoutube} url="#" />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="font-mono text-[--c1-txt] text-2xl ">I am Hugo Torres</h3>
                        <h4 className="font-bold font-mono text-3xl uppercase ">
                            Junior Developer
                        </h4>
                        <p className="text-balance text-lg italic mt-3 ">
                            Yo soy un programador muy motivado y excitado por el codigo limpio,
                            tanto que ensucio siempre mi lugar de trabajo.
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
                        src="/img/profile.png"
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
            className=" text-white text-lg transition duration-200 hover:text-[--c1-txt] hover:scale-150 "
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}
