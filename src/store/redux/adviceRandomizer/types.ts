export interface AdviceRandomizerSliceState {
    data: string [],
    error: undefined | any,
    status: 'default' | 'loading' | 'success' | 'error',
}