import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../features/counter/counterSlice';
import logger from "redux-logger";

export const store = configureStore({
    reducer: { 
        counter: counterSlice,
        //ردیوسر های دیگر که در فایل و اسلایس های دیگر تعریف شده اند
    },//ردیوسر های خود را یکی یکی در این قسمت وارد میکنیم
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)//?افزودن میدلور جدید به میدلور های پیشفرض ریداکس تولکیت
});

