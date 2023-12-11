import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCounterValue } from '../features/counter/counterSlice';
import { increment, decrement, eventOrOdd, multiplyWithPayload } from '../features/counter/counterSlice';

//useDispatch: برای استخراج تمامی مواردی که از استور به آن نیاز داریم
//useSelector: برای اجرای اکشن هایی که تعریف کردیم

function Counter() {
    const buttonStyle =  
    {
        border: "1px solid #c1c1c1",
        margin: "5px 10px",
        borderRadius: "8px",
    };
    const inputStyle = {
        height: "33px",
        borderRadius: "8px",
        padding: "5px 15px",
        margin: "5px 10px",
        outline: "none",
        borderColor: "#c1c1c1",
        fontSize: "15px",
        fontWeight: "500"
    };

    const [multiply, setMultiply] = useState(undefined);
    const counter = useSelector(selectCounterValue);//استخراج مقدار اولیه برای نمایش در صفحه با استفاده از هوک انتخاب کننده
    const dispatch = useDispatch();//برای اجرای اکشن آنرا به کلیک دکمه با نام اکشن پاس میدهیم

    // در صورت نیاز به پی لود آنرا به عنوان ورودی به اکشن پاس میدهیم
  return (
    <>
        <div>
            <h1>Redux Toolkit😁!</h1>
            <h4>count: {counter}</h4>
        </div>
        
        <div>
            <button style={buttonStyle} onClick={() => dispatch(increment())}>Increase Count</button>
            <button style={buttonStyle} onClick={() => dispatch(decrement())}>Decrease Count</button>
            <button style={buttonStyle} onClick={() => dispatch(eventOrOdd())}>Even Or Odd</button>
        </div>

        <div>
            <input 
                placeholder="enter a number" 
                type="number" 
                style={inputStyle}
                value={multiply}
                onChange={(e) => setMultiply(e.target.value)}
            />
            <button style={buttonStyle} onClick={() => dispatch(multiplyWithPayload(multiply))}>Multiply With Count</button>
        </div>
    </>
    
  )
}

export default Counter;