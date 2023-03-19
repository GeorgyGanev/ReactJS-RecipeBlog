import styles from './Login.module.css';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (

        <section className={styles["login"]}>
            <div className={styles["container"]}>
                <form id={styles["login-form"]}>
                    <h2>Login</h2>
                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text" />
                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" />
                    <input type="submit" className={styles["registerbtn"]} defaultValue="Login" />
                </form>
                <div className={styles["signin"]}>
                    <p>Dont have an account?</p>
                    <Link to="/register">Sign up</Link> 
                </div>
            </div>
        </section>
   
    );
};