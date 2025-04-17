import React, { useState } from 'react';
import TopHeader from '../../components/home/TopHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import Navbar from '../../components/Navbar/Navbar';
import { FaBars, FaTimes } from "react-icons/fa";
import '../../assets/css/Navbar.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header-wrapper">
      <TopHeader />

      <SearchBar />

      <div className="custom-toggle " onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Header;
