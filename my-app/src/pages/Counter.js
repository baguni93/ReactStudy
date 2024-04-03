import React ,{useState} from "react";

const Counter = () =>{
    
    const [num, setNumber] = useState(0); //const num = 0 첫번째 인수, 정의한 num이라는 변수에 대한 세터 함수
    
    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () =>{
        setNumber(num -1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
}


export default Counter;