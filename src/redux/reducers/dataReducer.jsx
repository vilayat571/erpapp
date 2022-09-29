import { createSlice } from "@reduxjs/toolkit";

const dataReducer = createSlice({
    name: "dataReducer",
    initialState: {
        contractdata:
        {
            dealer_id: null,
            canvesser_id: null,
            musteri_id: null,
            mehsul_id: 1,
            mehsul_sayi: 1,
            muqavile_tarixi: "2022-08-16",
            shirket_id: null,
            shobe_id: null,
            ofis_id: 2,
            elektron_imza: null,
            odenis_uslubu: "NƏĞD",
            pdf: null
        }

    },
    reducers: {
        getAttributesOfContract: (state, action) => {
            const { dealer_id, canvasser_id } = action.payload;
            const musteri_id = localStorage.getItem('musteri_id');
            state.contractdata = [{ ...state.contractdata, dealer_id: dealer_id, canvesser_id: canvasser_id, musteri_id: musteri_id }];
            localStorage.setItem('data', JSON.stringify(state.contractdata));
        },

    }
});
export const { getAttributesOfContract } = dataReducer.actions;
export default dataReducer.reducer;