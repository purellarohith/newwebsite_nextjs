import React from 'react';
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import Link from 'next/link';
import styles from './header.module.scss';



const Header: React.FC = () => {
    return (
        <nav className={`w-full flex items-center fixed px-8 py-8 justify-center ${styles.nav} z-30`}>
            <ul className='flex items-center gap-14'>
                <li className='list-none'>
                    <Link href={'/'} className='block relative z-10 text-white text-lg'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                        </div>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/about'} className='block relative z-10 text-white text-lg'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                        </div>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/projects'} className='block relative z-10 text-white text-lg'>
                        <div className='flex items-center gap-2'>
                            <AiOutlineFundProjectionScreen
                                style={{ marginBottom: "2px" }}
                            />
                            Projects
                        </div>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/resume'} className='block relative z-10 text-white text-lg'>
                        <div className='flex items-center gap-2'>
                            <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                        </div>
                    </Link>
                </li>
                {/* <li className='list-none'>
                    <Link href={'/'} className='block relative z-10 text-white text-lg'>
                        <div className='flex items-center gap-2'>
                            <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                        </div>
                    </Link>
                </li> */}
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