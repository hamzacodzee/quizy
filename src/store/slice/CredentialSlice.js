import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {
            "username": "admin",
            "password": "123",
            "role": "admin"
        },
        {
            "username": "abc",
            "password": "123",
            "role": "user"
        },
    ],
    userSession: [],
    subject: [
        {
            "name": "english",
            "totalQue": "1"
        },
        {
            "name": "science",
            "totalQue": "2"
        }

    ]
};

export const credentialSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setUserSession: (state, action) => {
            state.userSession = action.payload;
        },
        setSubject: (state, action) => {
            state.subject = action.payload;
        },
    },
});

export const { setUsers, setUserSession, setSubject } = credentialSlice.actions;

export default credentialSlice.reducer;