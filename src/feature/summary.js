import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    name: 'Shabbir Umrali',
    designation: 'Frontend Engineer'
}

export const summary = createSlice({
    name: 'summary',
    initialState: initialValue,
    reducers: {
        getName: (state) => {
            state.name = state.name
        },
        getDesignation: (state) => {
            return state.designation
        }
    }
})
export const {getName, getDesignation} = summary.actions
export default summary.reducer