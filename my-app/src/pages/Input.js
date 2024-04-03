import React ,{useState} from "react";

const Counter = () =>{
    
    const [txtValue, setTextValue] = useState(""); //const num = 0 첫번째 인수, 정의한 num이라는 변수에 대한 세터 함수
    
    const onChange = (e) => {
        setTextValue(e.target.value)
    };

    return (
        <div>
          <input type="text" value={txtValue} onChange={onChange} />
          <br />
          <p>{txtValue}</p>
        </div>
    );
};


export default Counter;