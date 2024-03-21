import styles from '@/styles/register.module.css'
import Image from 'next/image';
import Link from 'next/link';

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const Page = async () => {
    await sleep(3000);
    return (
        <div className={styles.main__cont}>
            <div className={styles.curve__bg}></div>
            <div className='main__header'>
                <Link href="/">
                    <Image src="/wm.png" width={150} height={50} alt='logo' />
                </Link>
            </div>
            <div className={styles.inner__cont}>
                <form className={styles.register__form}>
                    <h1 className={styles.main__heading}>Verification Process</h1>
                    <p className={styles.main__intro}>The verification code has been sent</p>
                    <div className={styles.verify__input__bx}>
                        <label>Verification Code</label>
                        <input type="text" placeholder='Enter your verification code' id="txtVerificationCode" name="verificationCode"  />
                    </div>
                    <div className={styles.continue__btn__grid}>
                        <button className={styles.continue__btn} type="submit">Verify</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Page;