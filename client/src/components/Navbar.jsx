import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo  from "../assets/11.png"
const Nav = styled.nav`
    background: linear-gradient(90deg, #0066ff, #33ccff);
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;



const NavItems = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 768px) {
        display: ${props => (props.open ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 80px;
        right: 50px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    }
`;

const NavItem = styled.li`
    a {
        text-decoration: none;
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        transition: background-color 0.3s, color 0.3s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }

    @media screen and (max-width: 768px) {
        a {
            color: #333;
            
            &:hover {
                background-color: #ddd;
                color: #333;
            }
        }
    }
`;


const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;
const Logo = styled.img.attrs({
    src: logo,
    alt: "Company Logo"
  })`
      width: auto;  // Auto to maintain aspect ratio
      height: 60px; // Set a height that fits within the navbar
      cursor: pointer;
      padding: 20px;  // Optional padding to give some space
  
      @media screen and (max-width: 768px) {
          height: 40px;  // Smaller height for mobile screens
      }
  `;
  
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo src={logo} alt="Octaverse Logo" />
            <NavItems open={isOpen}>
                <NavItem><a href="#home">Home</a></NavItem>
                <NavItem><a href="#about">About </a></NavItem>
                <NavItem><a href="#mission"> Vision & Strengths</a></NavItem>
                <NavItem><a href="#services">Services</a></NavItem>
              
                <NavItem><a href="#contact">Contact</a></NavItem>
            </NavItems>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes color="white" size="24px" /> : <FaBars color="white" size="24px" />}
            </Hamburger>
        </Nav>
    );
}

export default Navbar;
