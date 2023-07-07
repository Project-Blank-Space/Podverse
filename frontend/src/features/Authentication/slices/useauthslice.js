import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: {},
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        set_loading: (state, action) => {
            state.loading = action.payload;
        },
        set_user: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers: () => { },
});

export const { set_loading,set_user } = AuthSlice.actions;
export const authSliceReducer = AuthSlice.reducer;