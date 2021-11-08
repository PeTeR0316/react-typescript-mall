import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components'

import UserMenu from './components/UserMenu';
import SlideShow from './components/SlideShow';
import ColorBox from './components/ColorBox';


let btnVisible = "inline-block";

const AppStyle = styled.main`
    height : 1600px;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Noto Sans KR', 'Roboto', 'Nanum Myeongjo', sans-serif;
    }

    ul {
      list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    .Top {
      display : ${btnVisible}
    }
`;

function App() {
  const [ScrollY, setScrollY] = useState(0);
  
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY > 300) { // 100 이상이면 버튼이 보이게
      btnVisible = "inline-block";
    } else { // 100 이하면 버튼이 사라지게
      btnVisible = "none"
    }
  }

  //스크롤 이벤트 발생 시 handleFollow 함수 실행
  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();

    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

  return (
    <AppStyle>
      <Router>
        <UserMenu />
        <SlideShow />
        {/* <Route exact path='/' component={UserMenu} />
        <Route path='/slide' component={SlideShow} /> */}

        {/* <button className="Top">Top</button> */}
        <br />
      </Router>
      <ColorBox />
    </AppStyle>
  );
}

export default App;
