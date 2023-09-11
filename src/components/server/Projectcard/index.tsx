import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsLink } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.scss'

interface Props {
    imgPath: string
    title: string
    description: string
    link: string
}

function ProjectCards({ imgPath, title, description, link }: Props) {
    return (
        <section className={styles['project-card-view']}>
            <Image className="mx-auto rounded w-auto max-h-80" src={imgPath} width={420} height={320} alt="card-img" />
            <div className="flex flex-col my-4 justify-between  h-full">
                <div className="flex flex-col">
                    <label className="text-white text-lg text-center">{title}</label>
                    <p style={{ textAlign: "justify" }} className="text-white text-base font-medium">
                        {description}
                    </p>
                </div>
                <Link className="bg-primary flex items-center justify-center mx-auto px-4 py-2 rounded-md mt-4" href={link} target="_blank">
                    <CgWebsite /> &nbsp;
                    {"Website"}
                </Link>
                {"\n"}
                {"\n"}
            </div>
        </section>
    );
}
export default ProjectCards;
