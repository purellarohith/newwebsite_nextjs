import Particle from '@/components/client/Partical'
import styles from './styles.module.scss';
import NameTyping from '@/components/client/NameTyping';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${styles.home_section}`}>
      <Particle />
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
              I'M
              <strong className={styles["main-name"]}> Rohith Purella</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <NameTyping />
            </div>
          </div>
          <div className={styles.md5} style={{ paddingBottom: 20 }}>
            <Image
              width={undefined}
              src={'/assets/svgs/home-main.svg'}
              alt="home pic"
              className={styles['img-fluid']}
              style={{ maxHeight: "450px" }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
