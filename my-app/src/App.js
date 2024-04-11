import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Counter from "./pages/Counter";
// import Input from "./pages/Input";
// import Input2 from "./pages/Input2";

import { About, Counter,Header,Home,Input,Input2} from "./pages/index";

// import {ExHeader, ExInput} from "./components/index";

// import를 하나씩 가져오는 것 보다는, pages폴더에 index.js파일을 생성하여 한번에 가져오는 것을 추천드립니다!
// 예시로 컴포넌트 폴더를 생성하여 넣어놓을 테니 참조 부탁드립니다!
// index파일에서 불러올 때는, 위와같이 {} 안에 불러올 파일 명을 넣으면 됩니다!


function App() {
  return (
    <div className="App">
      {/* header컴포넌트에 해당 nav부분 작성 */}
      <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">Input2</Link>
      </nav>

      {/* pages - Contents컴포넌트를 만들어서 Router 관리하면 더 좋습니다! */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
      </Routes>


      {/* App.js파일은 내가 만든 모든 파일을 불러와, 화면으로 보여주는 유일한 파일입니다.
      Header, Content, Footer의 파일의 컴포넌트를 만들어, App.js에 가져오면 훨씬 좋을 것 같아요:D */}

    </div>
  );
}

export default App;


//  <Link to="/">Home</Link>  =>  <a href="/">Home</a>


// react-router-dom에서는 a (하이퍼링크 태그) 대신 Link태그를 사용합니다.
// 하지만, 외부링크 예를들어 https://www.naver.com/ 등의 링크를 가져올 때는 a 링크를 많이 사용합니다