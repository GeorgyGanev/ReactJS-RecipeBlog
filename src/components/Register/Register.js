import styles from './Register.module.css';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext';

export const Register = () => {

    const { onRegisterSubmit } = useAuthContext();

    const { formValues, onSubmit, onChangeHandler, errors, checkLength } = useForm({
        email: '',
        password: '',
        repeatPass: ''
    }, onRegisterSubmit);


    return (
        <section id={styles["register"]}>
            <div className={styles["container"]}>

                <form onSubmit={onSubmit} method='post' id={styles["register-form"]}>
                    <h2>Register</h2>
                
                    <label htmlFor="username">Email</label>
                    <input type="text" placeholder="Enter Username" name="email" required value={formValues.username} onChange={onChangeHandler} onBlur={(e) => checkLength(e, 1, 20)} />
                        {errors.email && 
                            <p className={styles['warning-message']}>Email is mandatory!</p>}

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" required value={formValues.password} onChange={onChangeHandler} onBlur={(e) => checkLength(e, 1)}/>
                        {errors.password && 
                            <p className={styles['warning-message']}>Password is mandatory!</p>}

                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required onChange={onChangeHandler} onBlur={(e) => checkLength(e, 1)}/>
                        {errors.repeatPass && 
                            <p className={styles['warning-message']}>Password is mandatory!</p>}    
                    
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