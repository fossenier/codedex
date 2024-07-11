"use client";

import React from 'react';

import GridMenu from '../components/GridMenu';
import Layout from '../components/Layout';

const MenuPage: React.FC = () => {
  return (
    <Layout>
      <h1>Menu</h1>
      <p>This is the menu page. Add your content here.</p>
      <GridMenu />
    </Layout>
  );
};

export default MenuPage;