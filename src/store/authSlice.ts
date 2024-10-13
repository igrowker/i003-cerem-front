import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    exp?: number;
}

const initialState = {
    user: null,
    token: localStorage.getItem("authToken") || null,
    tokenExpiration: localStorage.getItem("tokenExpiration") || null,
    isAuthenticated: !!localStorage.getItem("authToken"),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const decodedToken = jwtDecode<DecodedToken>(action.payload.token);
            if (decodedToken.exp) {
                const expirationTime = decodedToken.exp * 1000;

                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.tokenExpiration = expirationTime.toString();

                localStorage.setItem("authToken", action.payload.token);
                localStorage.setItem("tokenExpiration", expirationTime.toString());
            } else {
                console.error('Token does not have an expiration date.');
            }
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.tokenExpiration = null;
            localStorage.removeItem("authToken");
            localStorage.removeItem("tokenExpiration");
        },
    },
});

export const { loginSuccess, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
