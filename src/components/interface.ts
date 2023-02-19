export interface globalState {
    board: string[],
    currentPosition: number,
    attempt: number,
    correctWord: string,
    guessedWords: string[],
    gameover: boolean
}