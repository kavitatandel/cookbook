import logo from "../Images/Logo.png";
import styled from "styled-components";
import {Route, Routes, Link} from 'react-router-dom';

export default function Header() {

  
  return (
    <>
      <TopHeader>
        <Nav>

          <Link to="/" ><Logo src={logo} /></Link>
          <Link to="/india" style={{textDecoration: "none"}}><A>India</A></Link>
          <Link to="/uk" style={{textDecoration: "none"}}><A>UK</A></Link>
          <Link to="/poland" style={{textDecoration: "none"}}><A>Poland</A></Link>
          <Link to="/usa" style={{textDecoration: "none"}}><A>USA</A></Link>
          <Link to="/about" style={{textDecoration: "none"}}><A>About</A></Link>
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
  padding: 5px;
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

const A = styled.p`
  color: white;
  &:hover {
    color: orange;
    text-decoration-color: none;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: 10px;
`;
