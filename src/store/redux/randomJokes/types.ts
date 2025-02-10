export interface RandomJokesSliceState {
    date: string[],
    error: undefined | any,
    status: 'default' | 'loading' | 'success' | 'error', 
}
