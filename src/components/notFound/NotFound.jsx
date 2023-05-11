import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss'
const NotFound = () => {
    return (
        <div className={styles.root}>
            <h1>
                Unfortunately this page is missing
                <br />
                <span>😕</span>
                <div className={styles.underline}>
                    <Link to='/'>go home</Link>
                </div>
            </h1>
        </div>
    );
};

export default NotFound;