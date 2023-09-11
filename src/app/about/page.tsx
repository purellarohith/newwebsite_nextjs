import AboutDetails from '@/components/client/About';
import Particle from '@/components/client/Partical';
import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss'
import Techstack from '@/components/client/Techstack';
import Toolstack from '@/components/client/Toolstack';




const About = () => {
    return (
        <main className={`relative w-screen min-h-screen`} id='bg-color'>
            <div>
                <Particle />
            </div>
            <div>
                <div style={{ justifyContent: "center", padding: "10px" }} className='flex items-center gap-3 mx-auto'>
                    <div
                        className='justify-center pt-8 pb-12 mt-44'
                        style={{
                            width: "45%",
                        }}
                    >
                        <h1 className='pb-5 text-white text-center' style={{ fontSize: "2.1em" }}>
                            Know Who <strong className={styles['purple']}>{`I'M`}</strong>
                        </h1>
                        <AboutDetails />
                    </div>
                    <div
                        style={{ paddingBottom: "50px" }}
                        className="about-img pt-44"
                    >
                        <Image src={'/assets/images/about.png'} alt="about" className="img-fluid" width={450} height={450} />
                    </div>
                </div>
                <h1 className={styles["project-heading"]}>
                    Professional <strong className={styles['purple']}>Skillset </strong>
                </h1>

                <Techstack />

                <h1 className={styles["project-heading"]}>
                    <strong className={styles['purple']}>Tools</strong> I use
                </h1>
                <Toolstack />

                {/* <Github /> */}
            </div>
        </main>
    )
}


export default About