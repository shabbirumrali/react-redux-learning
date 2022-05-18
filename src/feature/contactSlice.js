import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        number: '7354060769',
        email: 'shabbirumrali@gmail.com',
        address: {
            houseName: 'Rahmat',
            area: 'Plot no. 40',
            colony: 'Mani shankar colony',
            city: 'Alirajpur',
            pinCode: '457887'
        },
        reducers: {
            getAddress: (state) => {
                return state
            }
        }
    }
})

export const {getAddress} = contactSlice.actions

export default contactSlice.reducer