import React from 'react';
import styled from 'styled-components';

const ColorBoxStyle = styled.div`
    .boxContainer {
        padding-left : 0;
        display : inline;
        border : 1px solid #000;
        height : 900px
        .colorBox {
            display : inline;
            width : 300px;
            height : 300px;
            background-color : white;
            border : 1px solid #000;
        }
    }
`;


const Colorbox = () => {
    //게임 난이도에 따른 숫자 변경
    const num = 9;
    const colorList = ['red', 'blue', 'green','yellow'];
    const selectColor = "";
    //배열의 크기는 num 값이며, colorList에서 임의의 값이 들어 감
    const colorRandomList = ['red', 'blue', 'green','yellow','red', 'blue', 'green','yellow','red'] 

    return (
        <ColorBoxStyle>
            <div>색 맞추기</div>
            <ul className="boxContainer">
                {colorRandomList.map((color, index) => {
                    return <li className="colorBox">{color}</li>                   
                })}
            </ul>
        </ColorBoxStyle>
    )
}

export default Colorbox;