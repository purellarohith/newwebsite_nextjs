'use client'

import Particle from '@/components/client/Partical';
import React, { useState } from 'react';
import styles from './styles.module.scss'
import ProjectCards from '@/components/server/Projectcard';




const Projects = () => {

    // dk.jpg
    // bighaat.jpg
    // amb.jpg
    // ds.jpg
    // pp.jpg


    const [projects, setProjects] = useState([
        {
            title: 'Procedurepal',
            imagePath: `${process.env.sas.base}pp.jpg${process.env.sas.token}`,
            description: 'With Procedure Pal you can manage all of your procedures from one place. Procedure Pal makes development, sharing, maintaining and auditing your procedures a breeze.',
            link: 'https://procedurepal.com/'
        },
        {
            title: 'DigiConnect',
            imagePath: `${process.env.sas.base}bighaat.jpg${process.env.sas.token}`,
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
            imagePath: `${process.env.sas.base}dk.jpg${process.env.sas.token}`,
            description: `Lyttildanskesalmer arose out of a desire to create a place on
            the web where you can hear all the hymns from The Danish
            Hymnal sung in their full length. The idea is that the website
            should be both a hymn reference work and a work tool for
            priests, theology students, organists and church singers.`,
            link: 'https://lyttildanskesalmer.dk/'
        },
        {
            title: 'Digital x Scale',
            imagePath: `${process.env.sas.base}ds.jpg${process.env.sas.token}`,
            description: `Lyttildanskesalmer arose out of a desire to create a place on
            the web where you can hear all the hymns from The Danish
            Hymnal sung in their full length. The idea is that the website
            should be both a hymn reference work and a work tool for
            priests, theology students, organists and church singers.`,
            link: 'https://digitalxscale.org/'
        },
        {
            title: 'AdMyBrand',
            imagePath: `${process.env.sas.base}amb.jpg${process.env.sas.token}`,
            description: `ADmyBRAND is the tech-age solution for omnichannel
            advertising.`,
            link: 'https://in.admybrand.com/'
        },
        {
            title: 'BigHaat',
            imagePath: `${process.env.sas.base}bighaat_db.png${process.env.sas.token}`,
            description: `BigHaat is the largest Agriculture Digital Platform for Farmers in India. Combining years of experience in agriculture with the power of data, science, and technology, BigHaat's Farmer-Centric Platform is empowering farmers to acquire the right knowledge about crops, and get timely and vital advice.`,
            link: 'https://play.google.com/store/apps/details?id=com.BigHaat&hl=en&gl=US'
        },
        {
            title: 'ADmyBRAND: ADify your AMBition',
            imagePath: `${process.env.sas.base}amb_da.png${process.env.sas.token}`,
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