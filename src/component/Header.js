import logo from "../Images/Logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <TopHeader>
        <Nav>
          <Logo src={logo} />
          <A href="#">India</A>
          <A href="#">UK</A>
          <A href="#">Poland</A>
          <A href="#">USA</A>
          <A href="#">About</A>
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
