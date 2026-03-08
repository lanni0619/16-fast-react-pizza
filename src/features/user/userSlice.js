import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const userSlcie = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlcie.actions;

export default userSlcie.reducer;
