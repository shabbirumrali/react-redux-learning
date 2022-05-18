import { createSlice } from "@reduxjs/toolkit";

const employmentSlice = createSlice({
    name: 'employment',
    initialState: {
        company: {
            startYear: '2017',
            endYear: '2018',
            designation: 'Designer',
            city: 'Indore',
            companyName: 'Aris Multimedia'
        },
        reducers: {
            getCompany: (state) => {
                return state
            }
        }
    }
})
export const { getCompany } = employmentSlice.actions

export default employmentSlice.reducer