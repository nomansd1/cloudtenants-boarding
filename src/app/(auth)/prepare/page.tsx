import styles from '@/styles/register.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Prepare = () => {
    return (
        <div className={styles.main__cont}>
            <div className={styles.curve__bg}></div>
            <div className='main__header'>
                <Link href="/">
                    <Image src="/wm.png" width={150} height={50} alt='logo' />
                </Link>
            </div>
            <div className={styles.inner__cont}>
                <div className={styles.register__form}>
                    <h1 className={styles.main__heading}>Verification Completed</h1>
                    <p className={styles.main__intro}>Get ready to dive in for an insightful walkthrough</p>
                    <div className={styles.wish__avatar}>
                        <Image src="/solution.svg" width={200} height={200} alt=''/>
                    </div>
                    <div className={styles.greet__text}>
                        <p>Congratulations, Your Account has been verified successfully.
                        Please enjoy the cookie while we are preparing your data</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prepare;