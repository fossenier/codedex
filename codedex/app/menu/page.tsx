"use client";

import React from 'react';

import FoodMenu from '../components/FoodMenu';
import Layout from '../components/Layout';

const MenuPage: React.FC = () => {
  return (
    <Layout>
      <h1>Menu</h1>
      <p>This is the menu page. Add your content here.</p>
      <FoodMenu />
    </Layout>
  );
};

export default MenuPage;