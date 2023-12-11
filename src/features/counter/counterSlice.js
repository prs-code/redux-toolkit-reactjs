import { createSlice } from "@reduxjs/toolkit";

const initialState = {// مقدار اولیه
    counterValue: 0,
};

const counterSlice = createSlice({
    name: "counter",//اسم یا همان اکشن ما است
    initialState,// مقدار اولیه است
    reducers: {//عملیات هایی که میخواهیم انجام دهیم
        //action: برای افزودن و دسترسی به پی لود استفاده می شود بصورت (action.payload)
        increment: (state, action) => {
            state.counterValue++;
        },
        decrement: (state, action) => {
            state.counterValue--;
        },
        eventOrOdd: (state, action) => {
            let result = state.counterValue % 2;

            if (result === 0) {
                alert(`our even value is ${state.counterValue}`);
            } else {
                alert(`our odd value is ${state.counterValue}`);
            }
        },
        multiplyWithPayload: (state, action) => {
            state.counterValue *=  action.payload;
        }
    }
});


export default counterSlice.reducer;
export const { increment, decrement, eventOrOdd, multiplyWithPayload } = counterSlice.actions; 
export const selectCounterValue = store => store.counter.counterValue;