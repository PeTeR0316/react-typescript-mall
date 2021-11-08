import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const UserMenuStyle = styled.div`
    .userMenu {
        width : 100%
        padding : 0;
        color : #000;
        display : block;
    }

    .userMenuList {
        display : inlien-block;
    }

    .logo {
        margin: 0 auto;
    }

`;

const UserMenu = () => {
    return (
        <UserMenuStyle>
            <ul className="userMenu">
                <li className="userMenuList">
                    <Link to="/join">
                        회원가입
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="/login">
                        로그인
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="/cart">
                        장바구니
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="/mypage">
                        마이페이지
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="/about">
                        고객센터
                    </Link>
                </li>
            </ul>
            
            <img className="logo" src="" alt="로고 이미지"/>
        </UserMenuStyle>
    )
}

export default UserMenu;