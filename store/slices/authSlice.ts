import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserRole = 'user1' | 'user2' | 'admin' | null;

interface AuthState {
  user: UserRole;
  isAuthorized: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserRole>) {
      state.user = action.payload;
      state.isAuthorized = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthorized = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
