import React ,{useState} from "react";

const Input2 = () =>{
    
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const {name, email, tel} = inputs;

    const onChange = (e) =>{

        const value = e.taregt.value;
        const id = e.taregt.id;

        //inputs[id] = value; x 
        //구조상 힙메모리에 저장, 주소값 , 깊은복사
        setInputs({
            ...inputs, 
            //name: "",
            //email: "",
            //tel: ""
            //name : value 
            //email : value 
            //tel : value 
            //해야 리엑트에서 상태 관리가 가능 
            [id]: value

        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value ={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id = "tel" value={tel}  onChange={onChange}/>
            </div>

          <br />
          <p>이름 : {name}</p>
          <p>이메일 : {email}</p>
          <p>전화번호 : {tel}</p>
        </div>
    );
    //유저가 입력한 정보를 가져올수 있겠다.
};


export default Input2;