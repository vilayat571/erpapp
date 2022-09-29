import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMehsullar = createAsyncThunk('/getMehsullar/', async () => {
    const token = localStorage.getItem('token');
    const data = fetch('http://67.205.154.217:8000/api/v1/mehsullar/', {
        method: 'Get',
        headers: { "Authorization": `Bearer ${token}` }
    })
        .then((res) => res.json())
        .then((mehsullar) => {
            return mehsullar
        });
    return data;
})
const getMehsulReducer = createSlice({
    name: "getMehsulReducer",
    initialState: {
        mehsullar: [],
        situation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getMehsullar.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getMehsullar.fulfilled]: (state, action) => {
            state.mehsullar = action.payload.results;
        },
        [getMehsullar.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.mesage;
        }
    }
});
export default getMehsulReducer.reducer;