import { faCss3, faHtml5, faJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { cls } from "../lib/utils";
import { useState } from "react";

export default function Skills() {
    return (
        <div id="skills" className=" relative flex justify-center px-5 bg-black/10 mt-48 mb-36 ">
            <svg viewBox="0 0 1440 320" className=" absolute bottom-full fill-black/10 ">
                <path
                    fillOpacity="1"
                    d="M0,192L80,192C160,192,320,192,480,186.7C640,181,800,171,960,181.3C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                />
            </svg>
            <svg viewBox="0 0 1440 320" className=" absolute top-full fill-black/10 ">
                <path
                    fillOpacity="1"
                    d="M0,256L120,234.7C240,213,480,171,720,154.7C960,139,1200,149,1320,154.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                />
            </svg>
            <div className=" flex flex-col items-center gap-10 w-full max-w-[--max-w] ">
                <h1 className="font-title tracking-widest uppercase text-5xl text-[--c3] ">
                    My Skills
                </h1>
                <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-[800px] px-10 ">
                    <SkillItem icon={<FontAwesomeIcon icon={faHtml5} />} name="HTML" percent="80" />
                    <SkillItem icon={<FontAwesomeIcon icon={faCss3} />} name="CSS" percent="70" />
                    <SkillItem
                        icon={<FontAwesomeIcon icon={faJs} />}
                        name="JavaScript"
                        percent="60"
                    />
                    <SkillItem
                        icon={<FontAwesomeIcon icon={faCss3} />}
                        name="Tailwind"
                        percent="70"
                    />
                    <SkillItem
                        icon={<FontAwesomeIcon icon={faReact} />}
                        name="React"
                        percent="50"
                    />
                    <SkillItem icon={<FontAwesomeIcon icon={faPhp} />} name="PHP" percent="40" />
                </div>
            </div>
        </div>
    );
}

function SkillItem({ icon, name, percent = 0 }) {
    const [currentPercent, setCurrentPercent] = useState(0);
    const handleMouseEnter = () => setCurrentPercent(percent);
    const handleMouseLeave = () => setCurrentPercent(0);
    return (
        <>
            <div
                className={cls(
                    " relative flex flex-col justify-center items-center gap-3 aspect-square rounded-md bg-black/5 cursor-pointer overflow-hidden ",
                    "group"
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className=" text-6xl ">{icon}</div>
                <p className=" font-content text-xl ">{name}</p>

                <div className=" absolute z-10 flex justify-center items-center w-full h-full bg-black/10 backdrop-blur transition-all duration-500 opacity-0 group-hover:opacity-100 ">
                    <div className="w-full p-10 aspect-square">
                        <CircularProgressbar
                            value={currentPercent}
                            text={`${currentPercent}%`}
                            styles={{
                                path: {
                                    stroke: `var(--c3)`,
                                },
                                text: {
                                    fill: `var(--c3)`,
                                    fontWeight: "bold",
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
