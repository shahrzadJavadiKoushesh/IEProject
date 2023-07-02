import { configureStore } from '@reduxjs/toolkit'
import theme from "./theme";
export default configureStore({
    reducer: {
        theme: theme,
    },
})