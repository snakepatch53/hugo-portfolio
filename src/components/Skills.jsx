import { faCss3, faHtml5, faJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { cls } from "../lib/utils";
import { useState } from "react";

export default function Skills() {
    return (
        <div id="skills" className="flex justify-center px-5">
            <div className=" flex flex-col items-center gap-10 w-full max-w-[--max-w] ">
                <h1 className="font-title tracking-widest uppercase text-5xl text-[--c3] mt-20 ">
                    Skills
                </h1>
                <div className=" grid grid-cols-3 gap-10 w-full max-w-[800px] ">
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
