"use client"; // This directive ensures that the component is rendered on the client side

import React from 'react'; // Importing React

import FoodMenu from '../components/FoodMenu'; // Importing the FoodMenu component

// Functional component for the Menu Page
const MenuPage: React.FC = () => {
  return (
    <>
      <FoodMenu /> {/* Rendering the FoodMenu component */}
    </>
  );
};

export default MenuPage; // Exporting the MenuPage component