import React from 'react';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiSass,
    DiCss3,
    DiHtml5,
} from "react-icons/di";
import {
    SiFirebase,
    SiNextdotjs,
    SiPostgresql,
} from "react-icons/si";
import {
    BiLogoTypescript
} from "react-icons/bi";
import styles from './styles.module.scss'


const Techstack = () => {
    return (
        <div style={{ justifyContent: "center", paddingBottom: "50px" }} className='flex flex-wrap'>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiJavascript1 />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiNodejs />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiReact />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiMongodb />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <SiNextdotjs />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiGit />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <SiFirebase />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <SiPostgresql />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiMongodb />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiSass />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiCss3 />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiHtml5 />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <BiLogoTypescript />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiJava />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`} >
                <DiPython />
            </div>
        </div>
    )
}


export default Techstack