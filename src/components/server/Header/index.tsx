'use client'

import React, { useState, useEffect } from 'react';
import { CgFileDocument, CgGitFork, CgSoftwareDownload } from "react-icons/cg";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';



const Header: React.FC = () => {

    const [navColour, updateNavbar] = useState(false);
    const pathname = usePathname();

    console.log("pathname  => ", pathname)

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])


    return (
        <nav className={`w-full flex items-center fixed px-8 py-4 justify-between ${styles.nav} ${navColour && styles.sticky} z-30`}>
            <div>
                <Image
                    src={'/assets/svgs/logo-white.svg'}
                    height={60}
                    width={60}
                    alt='Brand logo'
                />
            </div>
            <ul className='flex items-center gap-14'>
                <li className='list-none'>
                    <Link href={'/'} className={`block relative z-10 text-white text-lg ${pathname === '/' && styles.active}`}>
                        <div className='flex items-center gap-2'>
                            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                        </div>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/about'} className={`block relative z-10 text-white text-lg ${pathname.includes('/about') && styles.active}`}>
                        <div className='flex items-center gap-2'>
                            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                        </div>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/projects'} className={`block relative z-10 text-white text-lg ${pathname.includes('/projects') && styles.active}`}>
                        <div className='flex items-center gap-2'>
                            <AiOutlineFundProjectionScreen
                                style={{ marginBottom: "2px" }}
                            />
                            Projects
                        </div>
                    </Link>
                </li>
                <li className={`list-none ${styles['fork-btn']} p-0`}>
                    <Link href={'https://drive.google.com/file/d/1V5omlrDpgSYSfOy2HOwBA8YeFfSScqkT/view?usp=sharing'} className={`flex   ${styles['fork-btn-inner']} rounded-md text-white py-6`} download={true} target='_blank'>
                        <div className='flex items-center gap-2'>
                            <CgSoftwareDownload style={{ fontSize: "1.2em" }} /> Resume
                        </div>
                    </Link>
                </li>
                <li className={`list-none ${styles['fork-btn']} p-0`} >
                    <Link href={'https://gitlab.com/purellarohith'} target='_blank' className={`flex  px-0.5  ${styles['fork-btn-inner']} rounded-md text-white py-6`} >
                        <div className='flex items-center gap-2'>
                            <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                            <AiFillStar style={{ fontSize: "1.1em" }} />
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header