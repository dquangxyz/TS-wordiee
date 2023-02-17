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
    correctWord: wordList.words[randomNum].toUpperCase(),
    gameover: false
}


const boardSlice = createSlice({
    name: 'board',
    initialState: initialState,
    reducers: {
        addNewLetter(state, action){
            if (!state.gameover && state.currentPosition < (1 + state.attempt)*5 && state.attempt<6){
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
            // check if within the allowed attempts, and if all 5 letters has been entered
            if (!state.gameover && state.attempt < 6 && state.currentPosition%5 === 0){
                // check if the word exists then only attempt++
                const currentAttemptWordArr:string[] = []
                for (let i=5; i>0; i--){
                    currentAttemptWordArr.push(state.board[state.currentPosition-i])
                }
                const currentAttemptWord = currentAttemptWordArr.join("").toLowerCase()

                if (currentAttemptWord === state.correctWord.toLowerCase()){
                    state.attempt++
                    state.gameover = true
                } else if (wordList.words.includes(currentAttemptWord)){
                    state.attempt++
                } else {
                    alert("No such word")
                }               
            }
        }
    }
})

const store = configureStore({
    reducer: boardSlice.reducer
})

export const boardActions = boardSlice.actions
export default store