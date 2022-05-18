import { configureStore } from "@reduxjs/toolkit";
import summary from "../feature/summary";
import counterReducer from '../feature/counterSlice'
import contactReducer from '../feature/contactSlice'
import profileReducer from '../feature/profileSlice'
import educationReducer from "../feature/educationSlice";
import employmentReducer from '../feature/employmentSlice'
import softSkillsReducer from '../feature/softSkillSlice'
import techSlice from "../feature/techSkillSlice";

const store = configureStore({
    reducer: {
        summary,
        contact: contactReducer,
        counter: counterReducer,
        profile: profileReducer,
        education: educationReducer,
        employment: employmentReducer,
        softSkill: softSkillsReducer,
        technology: techSlice
    }
})
export default store