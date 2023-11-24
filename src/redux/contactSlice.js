import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.unshift(action.payload)
        },
        deleteContact: (state, action) => {
            return state.filter((item) => item.email !== action.payload)
        },
        editContact: (state, action) => {
            state[action.payload.id] = action.payload.user;
        },
    }
});

export const { addContact, deleteContact,editContact } = contactSlice.actions;
export default contactSlice.reducer;