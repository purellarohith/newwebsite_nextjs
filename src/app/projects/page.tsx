'use client'

import Particle from '@/components/client/Partical';
import React, { useState } from 'react';
import styles from './styles.module.scss'
import ProjectCards from '@/components/server/Projectcard';




const Projects = () => {



    const [projects, setProjects] = useState([
        {
            title: 'Procedurepal',
            imagePath: 'https://media.licdn.com/dms/image/D562DAQHw_GbO9HkIIQ/profile-treasury-image-shrink_800_800/0/1694074183130?e=1695031200&v=beta&t=hCB1VJuepojPkJtvFqI021dvBIpkwqznJ5JG8pPtrIg',
            description: 'With Procedure Pal you can manage all of your procedures from one place. Procedure Pal makes development, sharing, maintaining and auditing your procedures a breeze.',
            link: 'https://procedurepal.com/'
        },
        {
            title: 'DigiConnect',
            imagePath: 'https://media.licdn.com/dms/image/D562DAQH7n8bZfCI64A/profile-treasury-image-shrink_800_800/0/1694076680285?e=1695031200&v=beta&t=36DCpuVISgCD_tWsQjkkz5rEjAaVKCwlMN4AD0SXO3E',
            description: `BigHaat showcases exclusive brands that are a
            rarity in the market, enabling seamless online orders for
            season-specific goods, dairy and poultry products, specialty
            nutrients, chemicals, fertilizers, seeds, planting materials,
            and farm machinery.By leading the development of the
            BigHaat Mobile Application, contributed to empowering
            farmers with unmatched convenience and access to crucial
            resources anytime, anywhere.`,
            link: 'https://bigtrace.bighaat.com/'
        },
        {
            title: 'Lyt til danske salmer',
            imagePath: 'https://media.licdn.com/dms/image/D562DAQHNkSjKvZRUgQ/profile-treasury-image-shrink_800_800/0/1694074820274?e=1695031200&v=beta&t=clprKrz4ELEIdxunK1T7kpjeJ5msWg6Ich18P-o-q9A',
            description: `Lyttildanskesalmer arose out of a desire to create a place on
            the web where you can hear all the hymns from The Danish
            Hymnal sung in their full length. The idea is that the website
            should be both a hymn reference work and a work tool for
            priests, theology students, organists and church singers.`,
            link: 'https://lyttildanskesalmer.dk/'
        },
        {
            title: 'Digital x Scale',
            imagePath: 'https://media.licdn.com/dms/image/D562DAQG_J6q3WroezA/profile-treasury-image-shrink_800_800/0/1694074101570?e=1695031200&v=beta&t=LbeaYxUQOoBJQWNMm8pmLwaWnBViTeXEiOeXOmirsvU',
            description: `Lyttildanskesalmer arose out of a desire to create a place on
            the web where you can hear all the hymns from The Danish
            Hymnal sung in their full length. The idea is that the website
            should be both a hymn reference work and a work tool for
            priests, theology students, organists and church singers.`,
            link: 'https://digitalxscale.org/'
        },
        {
            title: 'AdMyBrand',
            imagePath: 'https://media.licdn.com/dms/image/D562DAQGD8VFFzTdHKg/profile-treasury-image-shrink_800_800/0/1694073866615?e=1695031200&v=beta&t=YUAQvZgZ92pFTfsGdkflMsDibMr83eq9LJDVBp7i2zI',
            description: `ADmyBRAND is the tech-age solution for omnichannel
            advertising.`,
            link: 'https://in.admybrand.com/'
        },
        {
            title: 'BigHaat',
            imagePath: 'https://play-lh.googleusercontent.com/e6TotmmBaPBQ7g26zyjfg_R9q_W9czEFCmCICUvwsikVu2lTBd-2QQpyX1-AZWYJFKLB=w2560-h1440-rw',
            description: `BigHaat is the largest Agriculture Digital Platform for Farmers in India. Combining years of experience in agriculture with the power of data, science, and technology, BigHaat's Farmer-Centric Platform is empowering farmers to acquire the right knowledge about crops, and get timely and vital advice.`,
            link: 'https://play.google.com/store/apps/details?id=com.BigHaat&hl=en&gl=US'
        },
        {
            title: 'ADmyBRAND: ADify your AMBition',
            imagePath: 'https://play-lh.googleusercontent.com/yH-bZDeGVU_P8BTjYacGFLNEbV6xZdGMJtsdQi9Cmsrrj-UhdREASt0sz7WuT_iYGA=w2560-h1440-rw',
            description: `ADify by ADmyBRAND is One-Stop solution for everything Marketing.`,
            link: 'https://play.google.com/store/apps/details?id=com.admybrand.adify&hl=en&gl=US'
        },
    ])


    return (
        <div className={`relative w-screen min-h-screen`} id='bg-color'>
            <div>
                <Particle />
            </div>
            <section className='pt-44'>
                <h1 className={styles['project-heading']}>
                    My Recent <strong className={styles['purple']}>Works </strong>
                </h1>
                <p className='text-center' style={{ color: "white" }}>
                    {`Here are a few projects I've worked on recently.`}
                </p>
                <div style={{ justifyContent: "center", paddingBottom: "10px" }} className='flex flex-row w-4/5 flex-wrap mx-auto'>
                    {
                        projects.map(project => (
                            <div key={project.title} className={styles['project-card']}>
                                <ProjectCards
                                    imgPath={project.imagePath}
                                    title={project.title}
                                    description={project.description}
                                    link={project.link}
                                />
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}


export default Projects