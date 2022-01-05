import logo from "../Images/Logo.png";
import styled from "styled-components";
import {Route, Routes, Link} from 'react-router-dom';

export default function Header() {

  
  return (
    <>
      <TopHeader>
        <Nav>

          <Link to="/" ><Logo src={logo} /></Link>
          <Link to="/india" >India</Link>
          <Link to="/uk">UK</Link>
          <Link to="/poland">Poland</Link>
          <Link to="/usa">USA</Link>
          <Link to="/about">About</Link>
        </Nav>
      </TopHeader>
    </>
  );
}

const TopHeader = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 7px solid orange;
`;

const Nav = styled.nav`
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  font-size: 1.4rem;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: 10px;
`;
