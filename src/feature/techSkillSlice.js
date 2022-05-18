import { createSlice } from "@reduxjs/toolkit";

const techSlice = createSlice({
    name: 'Technical Skill',
    initialState: {
        techSkill: ['Figma', 'Sketch', 'Adobe Photoshop', 'Adobe Illustration', 'Web Design(HTML/CSS)', 'Premiere Pro', 'After Effect', 'Photography']
    },
    reducers: {
        getTechSkill: state => {
            return state
        }
    }
})

export const { getTechSkill } = techSlice.actions

export default techSlice.reducer