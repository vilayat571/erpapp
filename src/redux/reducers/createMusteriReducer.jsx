import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMusteri = createAsyncThunk('/getMusteri/', async (details) => {

    const token = localStorage.getItem('token');

    const form_data = new FormData();

    const { bolge_id, asa, sv_image, sv_image2, tel1, tel2, tel3, tel4, unvan, qeyd } = details;

    form_data.append('sv_image', sv_image, sv_image.name);
    form_data.append('sv_image2', sv_image2, sv_image2.name);
    form_data.append('tel1', tel1);
    form_data.append('tel2', tel2);
    form_data.append('tel3', tel3);
    form_data.append('tel4', tel4);
    form_data.append('bolge_id', bolge_id);
    form_data.append('asa', asa);
    form_data.append('unvan', unvan);
    form_data.append('qeyd', qeyd);

    const url = 'http://67.205.154.217:8000/api/v1/musteriler/'
    const data = axios.post(url, form_data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'content-type': 'multipart/form-data'
        }
    })
        .then(res => {
            return res.data
        })
    return data;

});
const createMusteriReducer = createSlice({
    name: "createMusteriReducer",
    initialState: {
        musteri_id: "",
        situation: {
            isLoading: false,
            error: null
        }
    },
    extraReducers: {
        [getMusteri.pending]: (state, action) => {
            state.situation.isLoading = true;
            state.situation.error = null;
        },
        [getMusteri.fulfilled]: (state, action) => {
            localStorage.setItem('musteri_id', action.payload.id);

        },
        [getMusteri.rejected]: (state, action) => {
            state.situation.isLoading = false;
            state.situation.error = action.error.message;
        }
    }
});
export default createMusteriReducer.reducer;