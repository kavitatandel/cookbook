import logo from "../Images/Logo.png";
import styled from "styled-components";
import {Route, Routes, Link} from 'react-router-dom';
import {devices} from './Devices';

export default function Header() {

  
  return (
    <>
      <TopHeader>
        <Nav>

          <Link to="/" ><Logo src={logo} /></Link>
          <Link to="/"  style={{textDecoration: "none"}}><LogoMobile>SPICED WORLD</LogoMobile></Link>
              

          <Link to="/india" style={{textDecoration: "none"}}><A>India</A></Link>
          <Link to="/uk" style={{textDecoration: "none"}}><A>UK</A></Link>
          <Link to="/poland" style={{textDecoration: "none"}}><A>Poland</A></Link>
          <Link to="/usa" style={{textDecoration: "none"}}><A>USA</A></Link>
          <Link to="/about" style={{textDecoration: "none"}}><A style={{
            border: "0px"
          }}>About</A></Link>
        </Nav> 
      </TopHeader>
    </>
  );
}

const TopHeader = styled.header`
background-color: black;
color: white;
border-bottom: 4px solid orange;
display: flex;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 7px solid orange;
    padding: 5px;

  }
  
`;

const Nav = styled.nav`
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  margin-left: 40px;
  width: 200%;
  font-size: 1.2rem;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    font-size: 1.4rem;
  }
`;

const A = styled.p`
  color: white;
  text-decoration-color: none;
  border-bottom: 1px solid rgba(255,255,255,.2);
  &:hover {
    color: orange;
    text-decoration-color: none;
  }
  width: 90%;

  @media ${devices.tablet} {
    border: 0px;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-top: 10px;
  float: right;
  display: none;

  @media ${devices.tablet} {
    width: 100px;
    height: auto;
    margin: 10px;
    display: block;
  }
`;

const LogoMobile = styled.p`
  font-size: 1.8rem;
  color: white;
  display: block;
  text-decoration-color: none;
  margin-top: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  
  &:hover {
    color: orange;
    text-decoration-color: none;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;
