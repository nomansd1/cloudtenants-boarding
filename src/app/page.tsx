import Image from 'next/image'
import styles from './page.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <section className={styles.cont__bx}>
      <div className='main__header'>
        <Link href="/">
          <Image src="/wm.png" width={150} height={50} alt='logo'/>
        </Link>
      </div>
      <div className={styles.inner__cont}>
        <div>
          <a href="https://www.cloudtenants.com/" className={styles.bg__anchor}>
            <span className={styles.bg__anchor__pill}>Explore</span> <span className="text-sm font-medium"> Let's embark on a journey together</span>
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
          <h1 className={styles.main__title}>Your true digital <span>transformation</span> partner</h1>
          <p className={styles.main__text}>Streamline your business operations with our cutting-edge software solutions.</p>
          <div className={styles.nav__grid}>
            <Link href="#" className={styles.login__btn}>
              Login
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
            <Link href="/register" className={styles.register__btn}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
