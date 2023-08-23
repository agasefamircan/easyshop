import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        
        },
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=ReturnType<typeof store.dispatch>

export default store