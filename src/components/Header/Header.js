import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
    <nav>
        <Link to='/' className="active">Home</Link>

            <div id={styles['profile']}>
                <Link to="/catalog">Recipe Catalog</Link>
                <Link to="/create">Share Recipe</Link>
                <Link to="/">Logout</Link>
            </div>

            <div id={styles['guest']}>
                <Link to="/login">Login</Link>
                <Link to="register">Register</Link>
            </div>
    </nav>

    );
};