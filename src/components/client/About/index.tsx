import React from 'react';
import { ImPointRight } from 'react-icons/im';
import styles from './AboutDetails.module.scss';




const AboutDetails = () => {
    return (
        <div className={styles['quote-card-view']}>
            <div>
                <blockquote className="blockquote mb-0 ">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className={styles['purple']}>Rohith Purella </span>
                        from <span className={styles['purple']}> Hyderabad, India.</span>
                        <br /> FrontEnd Developer with 3 Years of Experience in JavaScript, React JS,
                        React Native, Next JS, HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, REST API, Node JS,
                        Express JS, MongoDB, Agile, Git, and JIRA.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className={`${styles['about-activity']} flex gap-1 items-center`}>
                            <ImPointRight /> Playing Games
                        </li>
                        <li className={`${styles['about-activity']} flex gap-1 items-center`}>
                            <ImPointRight /> Writing Tech Blogs
                        </li>
                        <li className={`${styles['about-activity']} flex gap-1 items-center`}>
                            <ImPointRight /> Travelling
                        </li>
                    </ul>
                </blockquote>
            </div>
        </div>
    )
}

export default AboutDetails;