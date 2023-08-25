import Particle from '@/components/client/Partical'
import styles from './styles.module.scss';
import NameTyping from '@/components/client/NameTyping';
import Image from 'next/image';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';


export default function Home() {
  return (
    <main className={`relative ${styles['bg-color']} `}>
      <div>
        <Particle />
        <section className={`flex flex-col items-center justify-between p-24 ${styles.home_section}`}>
          <section className={`w-full ${styles.home_content}`}>
            <div className='flex flex-row'>
              <div className={styles.home_header}>
                <h1 className={`pb-4 ${styles.heading} `}>
                  Hi There!{" "}
                  <span className={styles.wave} role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className={styles["heading-name"]}>
                  {`I'M`}
                  <strong className={styles["main-name"]}> Rohith Purella</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <NameTyping />
                </div>
              </div>
              <div className={styles.md5} style={{ paddingBottom: 20 }}>
                <Image
                  width={460}
                  height={460}
                  src={'/assets/svgs/home-main.svg'}
                  alt="home pic"
                  className={styles['img-fluid']}
                  style={{ maxHeight: "450px" }}
                />
              </div>
            </div>
          </section>
        </section>
        <div>
          <section className={`${styles['home-about-section']} mx-auto px-6`}>
            <div className={`flex items-center justify-center`}>
              <div className={`${styles['home-about-description']} ${styles['description_container']}`}>
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className={styles['purple']}> INTRODUCE </span> MYSELF
                </h1>
                <p className={styles['home-about-body']}>
                  I fell in love with programming and I have atleast learnt
                  something, I think… 🤷‍♂️
                  <br />
                  <br />I am fluent in
                  {/* classics like */}
                  <i>
                    <b className={styles['purple']}> Javascript. </b>
                  </i>
                  <br />
                  <br />
                  {`My field of Interest's are building new `} &nbsp;
                  <i>
                    <b className={styles['purple']}>Web Technologies and Products </b> and
                    also in areas related to{" "}
                    <b className={styles['purple']}>
                      E-Commerce.
                    </b>
                  </i>
                  <br />
                  <br />
                  Whenever possible, I also apply my passion for developing products
                  with <b className={styles['purple']}>Node.js</b> and
                  <i>
                    <b className={styles['purple']}>
                      {" "}
                      Modern Javascript Library and Frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className={styles['purple']}> React.js , Next.js and React-Native</b>
                  </i>
                </p>
              </div>
              <div className={styles['myAvtar']}>
                <Image
                  width={240}
                  height={240}
                  src={'/assets/svgs/avatar.svg'}
                  alt="home pic"
                  className={styles['img-fluid']}
                  style={{ maxHeight: "240px" }}
                />
              </div>
            </div>
            <div>
            </div>
          </section>
          <section className={`${styles['home-about-social']} pb-4`}>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className={styles['purple']}>connect </span>with me
            </p>
            <ul className={styles['home-about-social-links']}>
              <li className={styles["social-icons"]}>
                <Link
                  href="https://github.com/purellarohith"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles['icon-colour']}  ${styles['home-social-icons']}`}
                >
                  <AiFillGithub />
                </Link>
              </li>
              <li className={styles["social-icons"]}>
                <Link
                  href="https://twitter.com/iamrohithpatel"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles['icon-colour']}  ${styles['home-social-icons']}`}
                >
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li className={styles["social-icons"]}>
                <Link
                  href="https://www.linkedin.com/in/rohith-purella-b66066211/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles['icon-colour']}  ${styles['home-social-icons']}`}
                >
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
