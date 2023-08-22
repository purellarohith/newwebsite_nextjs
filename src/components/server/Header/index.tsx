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



const Header: React.FC = () => {
    return (
        <nav className='w-full flex items-center fixed'>
            <ul className='flex items-center gap-4'>
                <li className='list-none'>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <>
                            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                        </>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <>
                            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                        </>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <>
                            <AiOutlineFundProjectionScreen
                                style={{ marginBottom: "2px" }}
                            />
                            Projects
                        </>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <>
                            <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                        </>.
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <>
                            <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                        </>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link href={'/'} className='flex '>
                        <>
                            <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                            <AiFillStar style={{ fontSize: "1.1em" }} />
                        </>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header