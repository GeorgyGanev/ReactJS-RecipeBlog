import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
          const result = await authService.login(data);
          
          setAuth(result);

          if (result = {}){
            return;
          }
          navigate('/catalog')
    
        } catch (err) {
          return alert('Invalid email or passwor')
        }
      };
    
      const onRegisterSubmit = async (data) => {
    
        const { repeatPass, ...registerData } = data;
    
        if (repeatPass !== registerData.password) {
          return;
        }
       
        try {
          const result = await authService.register(registerData);
          
          setAuth(result);
          navigate('/catalog')
          
        }catch(err) {
          console.log(err.message)
        }

      };

      const onLogout = async () => {
        await authService.logout();
        setAuth({});
      };

      const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken
      };

      return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
      );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}


