import { createSlice } from '@reduxjs/toolkit'

export const modeSwitcher = createSlice({
    name: 'light_mode',
    initialState: {
        value: true,
    },
    reducers: {
        switchMode: state => {
            state.value = !state.value
        }
    },
})

export const { switchMode } = modeSwitcher.actions

export default modeSwitcher.reducer