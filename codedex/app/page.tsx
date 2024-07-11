"use client";

import React, { useEffect, useState } from 'react';

import Layout from './layout';

const HomePage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout>
      <h1>Welcome to the Home Page</h1>
      {mounted && <p>This content only renders on the client side</p>}
    </Layout>
  );
};

export default HomePage;