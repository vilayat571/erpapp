import { configureStore } from "@reduxjs/toolkit";
import createMusteriReducer from "../reducers/createMusteriReducer";
import createNegdMuqavileReducer from "../reducers/createNegdMuqavileReducer";
import dataReducer from "../reducers/dataReducer";
import getAllContractReducer from "../reducers/getAllContractReducer";
import getBolgeReducer from "../reducers/getBolgeReducer";
import getMehsulReducer from "../reducers/getMehsulReducer";
import getOfisReducer from "../reducers/getOfisReducer";
import loginReducer from "../reducers/loginReducer";
import newcontractReducer from "../reducers/newcontractReducer";

export const store = configureStore({
    reducer: {
        loginReducer: loginReducer,
        newcontractReducer: newcontractReducer,
        getBolgeReducer: getBolgeReducer,
        dataReducer: dataReducer,
        getOfisReducer: getOfisReducer,
        getMehsulReducer: getMehsulReducer,
        createMusteriReducer: createMusteriReducer,
        createNegdMuqavileReducer: createNegdMuqavileReducer,
        getAllContractReducer: getAllContractReducer
    }
})