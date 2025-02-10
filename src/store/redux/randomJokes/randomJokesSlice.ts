import { createAppSlice } from "store/createAppSlice";
import { RandomJokesSliceState } from "./types";

const randomJokesInitialState: RandomJokesSliceState =  {
    date: [],
    error: undefined,
    status: 'default', 
}

export const randomJokesSlice = createAppSlice({
    name: "RANDOM_JOKES",
    initialState: randomJokesInitialState,
    reducers: 
})