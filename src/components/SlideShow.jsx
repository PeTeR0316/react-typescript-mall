import React, { useEffect, useState } from 'react';
import styled from 'styled-components';





const SlideShow = () => {
    const [marginLeft, setMarginLeft] = useState(0);

        const SlideShowStyle = styled.div`
        width : 900px;
        margin : 0 auto;
        overflow : hidden;

        .slideShowFrame {
            width : 2700px;
            height : 400px;
            margin : 0 auto;
            margin-left : ${marginLeft}px;
        }

        .slideImg {
            width : 900px;
            height : 400px;
            display : inline-block;

            &:first-child {
                background-color : #700;
                cursor : pointer;
                &:hover {
                    background-color : #900;
                }
            }

            &:nth-(2) {
                background-color : #070;
                cursor : pointer;
                &:hover {
                    background-color : #090;
                }
            }

            &:last-child {
                background-color : #007;
                cursor : pointer;
                &:hover {
                    background-color : #009;
                }
            }
        }

    `

    const mainSlideShow = async() => {
        let slideEl = document.querySelector(".slideImg"); // 슬라이드 이미지 첫번째 요소 선택
        // await (
        //     document.querySelector(".slideShowFrame").style.transform = "translateX(-900px)",
        //     document.querySelector(".slideShowFrame").style.transitionDuration = "3s"
        // );

        //await (document.querySelector(".slideShowFrame").style.transform = "translateX(-0px)");
        //await (document.querySelector(".slideShowFrame").appendChild(slideEl)); // 슬라이드 이미지 첫번째 요소를 마지막 위치로 이동
        console.log(slideEl);
        document.querySelector(".slideShowFrame").appendChild(slideEl)
    }
    
    setTimeout(mainSlideShow, 6000);
    //setInterval(mainSlideShow, 3000);

    const chFn = () => {
        document.querySelector(".slideImg").style.backgroundColor = "#000"
    }

    return (
        <SlideShowStyle>
            <div className="slideShowFrame">
                {/* <img className="slideImg" src="" alt="슬라이드 이미지1" />
                <img className="slideImg" src="" alt="슬라이드 이미지2" />
                <img className="slideImg" src="" alt="슬라이드 이미지3" /> */}

                <div className="slideImg">1번 이미지</div>
                <div className="slideImg">2번 이미지</div>
                <div className="slideImg">3번 이미지</div>
            </div>

            
                <div className="nth">1</div>
                <div className="nth">2</div>

            <button onClick={chFn}>색변경</button>


        </SlideShowStyle>
    )
}

export default SlideShow;