import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getContracts = createAsyncThunk('/getContracts/', async () => {

    const url = 'http://67.205.154.217:8000/api/v1/muqavile/';

    const token = localStorage.getItem('token');

    const data = fetch(url, {
        method: "Get",
        headers: {
            headers: { "Authorization": `Bearer ${token}` }
        }
    })
        .then((res) => res.json())
        .then((contracts) => {
            return contracts
        })
    return data;

});

const getAllContractReducer = createSlice({
    name: "getAllContractReducer",
    initialState: {
        contracts: [],
        situation: {
            isLoading: false,
            error: null

        }
    },
    extraReducers: {
        [getContracts.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null
        },
        [getContracts.pending]: (state, action) => {
            state.contracts = action.paylaod;
        },
        [getContracts.pending]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message
        }
    }
});
export default getAllContractReducer.reducer;