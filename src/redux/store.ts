import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    board: [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
    ],
    currentPosition: 0,
    attempt: 0
}


const boardSlice = createSlice({
    name: 'board',
    initialState: initialState,
    reducers: {
        addNewLetter(state, action){
            if (state.currentPosition < (1 + state.attempt)*5){
                state.board[state.currentPosition] = action.payload
                state.currentPosition++
            }    
        },
        deleteLetter(state){
            if (state.currentPosition > state.attempt*5){
                state.currentPosition--
                state.board[state.currentPosition] = ""              
            }
        },
        enterNextAttempt(state){
            if (state.attempt < 6){
                state.attempt++
            }
        }
    }
})

const store = configureStore({
    reducer: boardSlice.reducer
})

export const boardActions = boardSlice.actions
export default store