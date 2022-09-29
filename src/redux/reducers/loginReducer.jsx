import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getToken = createAsyncThunk('/getToken/', async ({ username, password }) => {
    const data = fetch('http://67.205.154.217:8000/api/v1/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                username: username,
                password: password
            }
        )
    })
        .then((res) => res.json())
        .then((auth) => {
            return auth
        })
    return data;
});

const loginReducer = createSlice({
    name: "loginReducer",
    initialState: {
        details: [],
        situation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getToken.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getToken.fulfilled]: (state, action) => {
            state.details = action.payload;
            localStorage.setItem('username', state.details.user_details.username)
            localStorage.setItem('token', state.details.access)
        },
        [getToken.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});
export default loginReducer.reducer;