import styles from './Login.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);

    const { formValues, onSubmit, onChangeHandler, errors, checkLength } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);

    return (
        <section className={styles["login"]}>
            <div className={styles["container"]}>
                <form method='post' onSubmit={onSubmit} id={styles["login-form"]}>
                    
                    <h2>Login</h2>
                    
                    <label htmlFor='username'>Email</label>
                    <input placeholder="Enter Username" name="email" type="text" value={formValues.username} onChange={onChangeHandler} onBlur={(e) => checkLength(e, 1, 20)} />
                        {errors.email && 
                            <p className={styles['warning-message']}>Email is mandatory!</p>}

                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={formValues.password} onChange={onChangeHandler} onBlur={(e) => checkLength(e, 1)}/>
                        {errors.password && 
                            <p className={styles['warning-message']}>Password is mandatory!</p>}
                    
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