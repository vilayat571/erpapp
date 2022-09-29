import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBolge = createAsyncThunk('/getBolge/', async () => {
    const token = localStorage.getItem('token');
    const data = fetch("http://67.205.154.217:8000/api/v1/bolge/", {
        method: "Get",
        headers: { "Authorization": `Bearer ${token}` }
    })
        .then((res) => res.json())
        .then((bolgeler) => {
            return bolgeler
        })
    return data;
});
const getBolgeReducer = createSlice({
    name: "getBolgeReducer",
    initialState: {
        data: [],
        situation: {
            isLoading: false,
            error: null
        },
    },
    extraReducers: {
        [getBolge.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getBolge.fulfilled]: (state, action) => {
            state.data = action.payload.results;
            state.situation.isLoading = false;
        },
        [getBolge.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});
export default getBolgeReducer.reducer;