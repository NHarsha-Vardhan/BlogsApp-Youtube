import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSclice";

export default configureStore({
    reducer:{
        user:userReducer,
    },
});