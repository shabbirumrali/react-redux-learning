import {createSlice} from '@reduxjs/toolkit'

const profileSlice = createSlice({
    name: 'Profile',
    initialState: {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum quod possimus. At delectus ipsum maiores alias iusto esse hic."
    },
    reducers: {
        getProfile: (state) => {
            return state
        }
    }
})

export const {getProfile} = profileSlice.actions

export default profileSlice.reducer