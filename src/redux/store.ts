import { createSlice, configureStore } from '@reduxjs/toolkit'
import wordList from '../words.json'

let randomNum = Math.floor(Math.random() * wordList.words.length)

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
    attempt: 0,
    correctWord: wordList.words[randomNum].toUpperCase()
}


const boardSlice = createSlice({
    name: 'board',
    initialState: initialState,
    reducers: {
        addNewLetter(state, action){
            if (state.currentPosition < (1 + state.attempt)*5 && state.attempt<6){
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
            if (state.attempt < 6 && state.currentPosition%5 === 0){
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