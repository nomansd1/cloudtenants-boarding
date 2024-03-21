import styles from '@/styles/loader.module.css'

function Loading() {
    return (
        <div className={styles.preloader}>
                <div className={styles.box}></div>
        </div>
    );
}

export default Loading;