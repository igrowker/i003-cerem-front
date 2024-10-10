import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { logout } from '@/store/authSlice';
import { useMemo } from 'react';

const useUserRole = () => {
    const dispatch = useDispatch();
    const token = useSelector((state: any) => state.auth.token) || localStorage.getItem('authToken');

    if (!token) {
        return {
            session: null,
        };
    }

    const decodedToken = useMemo(() => {
        try {
            return jwtDecode(token) as any;
        } catch (error) {
            console.error('Error decodificando el token', error);
            return null;
        }
    }, [token]);

    if (!decodedToken) {
        return {
            session: null,
        };
    }

    const currentTime = Math.floor(Date.now() / 1000);

    if (decodedToken.exp < currentTime) {
        dispatch(logout());
        return {
            session: null,
        };
    }

    const session = {
        id: decodedToken.Id,
        exp: decodedToken.exp,
        iss: decodedToken.iss,
        token: token,
    };

    return {
        session,
    };
};

export default useUserRole;
