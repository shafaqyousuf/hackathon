import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducer/loginSlice";
import cardSlice from "../reducer/cardSlice";
import signupSlice from "../reducer/signupSlice";

const store = configureStore({
    reducer:{
        login: loginSlice,
        signup: signupSlice,
        card: cardSlice,
    }
});

export default store;