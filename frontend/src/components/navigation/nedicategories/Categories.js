import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nedicategory.css'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown on button click
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on subcategory click
  const handleSubcategoryClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Nedi Group
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <Link to='/'><li ><h3 onClick={handleSubcategoryClick} id='nedigroup'>Nedi Foods</h3></li></Link>
          <Link to='/nediapparels'><li><h3 onClick={handleSubcategoryClick} id='nedigroup'>Nedi Apparels</h3></li></Link>
          <Link to='nedihousehold'><li><h3 onClick={handleSubcategoryClick} id='nedigroup'>Nedi Household Items</h3></li></Link>
        </ul>
      )}
    </div> 
  );
};

export default DropdownMenu;
