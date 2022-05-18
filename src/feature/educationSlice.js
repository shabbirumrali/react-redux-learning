import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
    name: 'education',
    initialState: {
        univercity: 'RGPV Univercity',
        startYear: '2015',
        endYear: '2019',
        degree: 'Bachlor in Computer Science',
        city: 'Indore'
    },
    reducers: {
        getEducation: (state) => {
            return state
        }
    }
})

export const { getEducation } = educationSlice.actions

export default educationSlice.reducer