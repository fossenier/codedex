"use client";

import React from 'react';

import ThreeDMenu from '../components/ThreeDMenu';
import styles from './GridMenu.module.css';

// Function to generate a random neutral color
const getRandomNeutralColor = () => {
  const r = Math.floor(Math.random() * 156 + 100);
  const g = Math.floor(Math.random() * 156 + 100);
  const b = Math.floor(Math.random() * 156 + 100);
  return `rgb(${r}, ${g}, ${b})`;
};

const GridMenu: React.FC = () => {
  const menuItems = [
    { modelPath: '/models/boba_tea_cup.glb' },
    { modelPath: '/models/bubble_tea_and_cookies.glb' },
    { modelPath: '/models/cafe_latte_with_art.glb' },
    { modelPath: '/models/coffee_shop_cup.glb' },
    { modelPath: '/models/desserts.glb' },
    { modelPath: '/models/iced_coffee.glb' },
  ];

  return (
    <div className={styles.gridContainer}>
      {menuItems.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          <ThreeDMenu modelPath={item.modelPath} backgroundColor={getRandomNeutralColor()} />
        </div>
      ))}
    </div>
  );
};

export default GridMenu;