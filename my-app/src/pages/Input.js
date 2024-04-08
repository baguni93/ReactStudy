import React ,{useState} from "react";

const Input = () =>{
    
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
    //유저가 입력한 정보를 가져올수 있겠다.
};


export default Input;