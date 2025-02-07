// 1. import function to create slice
import { createAppSlice } from "store/createAppSlice";
import { CounterStateSlice } from "./types";

//  4.1 create object with initial stete to gibe initialStaate
const counterInitialState: CounterStateSlice = { // => immer Object
    counterValue: 0, 
}

// 2. create sclice to counter
export const counterSlice = createAppSlice({
// 3. create name of object storage (state)
    name: 'COUNTER',
    // 4. add object that contain initial state 
    initialState: counterInitialState,
    // 5. create object to group the reducer - functions that change state
    reducers: create => ({
        // the name create selbs
        plus: create.reducer((state: CounterStateSlice) => {state.counterValue = state.counterValue + 1}),
        minus: create.reducer((state: CounterStateSlice) => {state.counterValue = state.counterValue - 1})
    }),

    selectors: {
        count: (state: CounterStateSlice) => state.counterValue
    }
})

export const counterActions = counterSlice.actions;
export const counterSelectors = counterSlice.selectors;

