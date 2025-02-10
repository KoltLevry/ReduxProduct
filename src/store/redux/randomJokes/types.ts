export interface RandomJokesSliceState {
    data: string[],
    error: undefined | any,
    status: 'default' | 'loading' | 'success' | 'error', 
}
