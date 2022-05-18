import { createSlice } from "@reduxjs/toolkit";

const softSkillSlice = createSlice({
    name: 'soft skill',
    initialState: {
        skills: [
            'communication',
            'time managment',
            'team work',
            'creativity',
            'attention to details',
            'desire to learn',
            'meeting deadlines'
        ]
    },
    reducers: {
        getSkills: state => {
            return state
        }
    }
})
export const {getSkills} = softSkillSlice.actions

export default softSkillSlice.reducer