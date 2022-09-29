import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNegdMuqavile = createAsyncThunk('/getNegdMuqavile/', async () => {
    /* const url='http://67.205.154.217:8000/api/v1/muqavile/';

    const token = localStorage.getItem('token');
    const form_data = new FormData();

    const data = axios.post(url, form_data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'content-type': 'multipart/form-data'
        }
    })
        .then(res => {
            return res.data
        })
    return data; */

})
const createNegdMuqavileReducer = createSlice({
    name: "createNegdMuqavileReducer",
    initialState: {
        situation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getNegdMuqavile.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getNegdMuqavile.fulfilled]: (state, action) => {
            console.log('Muqavile page', action.payload);
        },
        [getNegdMuqavile.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});
export default createNegdMuqavileReducer.reducer;