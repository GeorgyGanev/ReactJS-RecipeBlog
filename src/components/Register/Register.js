import styles from './Register.module.css';

import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <section id={styles["register"]}>
            <div className={styles["container"]}>

                <form id={styles["register-form"]}>
                    <h2>Register</h2>
                
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <label htmlFrom="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required />
                    
                    <input type="submit" className={styles["registerbtn"]} value="Register" />
                </form>

                <div className={styles["signin"]}>
                    <p>Already have an account? </p>
                        <Link to="/login">Sign in</Link>
                </div>
            </div>
        </section>
    );
};