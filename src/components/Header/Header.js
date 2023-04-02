import styles from './Header.module.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {

    const { isAuthenticated, username } = useContext(AuthContext);

    return (
<header>
    <nav>
        <Link to='/' className="active">Home</Link>
        {isAuthenticated && (
            <Link to='/userProfile'>{username}</Link>
        )}
    
            {isAuthenticated && (
            <div id={styles['profile']}>
                <Link to="/catalog">Recipe Catalog</Link>
                <Link to="/create">Share Recipe</Link>
                <Link to="/logout">Logout</Link>
            </div>
            )}
           
            {!isAuthenticated && (
                <div id={styles['guest']}>
                <Link to="/catalog">Recipe Catalog</Link>
                <Link to="/login">Login</Link>
                <Link to="register">Register</Link>
            </div>
            )}
            
    </nav>
</header>
    );
};