import React from 'react';
import { SiConfluence, SiLinux, SiMacos, SiMicrosoftazure, SiMicrosoftteams, SiPostman, SiSlack, SiSwagger, SiVercel, SiVisualstudiocode, SiWindows } from 'react-icons/si';
import styles from './styles.module.scss'


const Toolstack = () => {
    return (
        <div style={{ justifyContent: "center", paddingBottom: "50px" }} className='flex flex-wrap'>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiVisualstudiocode />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiMacos />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiLinux />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiWindows />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiPostman />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiSwagger />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiSlack />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiMicrosoftteams />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiConfluence />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiMicrosoftazure />
            </div>
            <div className={`${styles["tech-icons"]} w-2/12`}>
                <SiVercel />
            </div>
        </div>
    )
}


export default Toolstack