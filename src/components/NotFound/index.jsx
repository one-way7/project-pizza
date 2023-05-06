import styles from './NotFound.module.scss'
const NotFound = () => {
    return (
        <div className={styles.root}>
            <h1>
                Unfortunately this page is missing
                <br />
                <span>😕</span>
                <div className={styles.underline}>
                    <a href='#'>go home</a>
                </div>
            </h1>
        </div>
    );
};

export default NotFound;