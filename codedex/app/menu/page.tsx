"use client";

import React from 'react';

import Layout from '../components/Layout';
import ThreeDMenu from '../components/ThreeDMenu';

const MenuPage: React.FC = () => {
  return (
    <Layout>
      <h1>Menu</h1>
      <p>This is the menu page. Add your content here.</p>
      <ThreeDMenu />
    </Layout>
  );
};

export default MenuPage;