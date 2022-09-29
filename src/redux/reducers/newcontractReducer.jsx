import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('/getUsers/', async () => {
    const token = localStorage.getItem('token');
    const data = fetch('http://67.205.154.217:8000/api/v1/users/', {
        method: "Get",
        headers: { "Authorization": `Bearer ${token}` }
    })
        .then(res => res.json())
        .then(users => {
            return users
        })
    return data;
});
const newcontractReducer = createSlice({
    name: "newcontractReducer",
    initialState: {
        situation: {
            isLoading: false,
            error: null
        },
        users:[]
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users=action.payload.results;
            state.situation.isLoading = false;
            state.situation.error = null;
        },
        [getUsers.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});
export default newcontractReducer.reducer;