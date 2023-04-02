import { Navigate } from "react-router-dom";

import { useAuthContext } from '../../contexts/AuthContext';

export const RouteGuard = ({
    children
}) => {
    const { isAuthenticated } = useAuthContext();
    
    if (isAuthenticated === false) {
        return <Navigate to='/login' />
    } 

    return (
        <>
            {children}
        </>
    ) 
}