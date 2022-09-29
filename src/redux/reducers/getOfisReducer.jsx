import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getOfis = createAsyncThunk('/getOfis/', async () => {
    const token = localStorage.getItem('token');
    const data = fetch('http://67.205.154.217:8000/api/v1/ofisler/', {
        method: 'Get',
        headers: { "Authorization": `Bearer ${token}` }
    })
        .then((res) => res.json())
        .then((ofisler) => {
            return ofisler
        });
    return data;
});
const getOfisReducer = createSlice({
    name: "getOfisReducer",
    initialState: {
        ofis: [],
        situation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getOfis.pending]: (state, ation) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getOfis.fulfilled]: (state, action) => {
            state.ofis = action.payload.results;
        },
        [getOfis.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});
export default getOfisReducer.reducer;