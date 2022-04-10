import React from 'react';
import ReactDOM from 'react-dom';
import HomepageHero from './HomepageHero';
import HomepageSectionProducts from './HomepageSectionProducts';
import HomepageSectionRecipes from './HomepageSectionRecipes';
import HomepageSectionDeserts from './HomepageSectionDeserts';
import { Backdrop } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

function Homepage() {
  const loggining = useSelector(store => store.isLoggining);
  const dispatch = useDispatch();
  return (
    <main>
      <HomepageHero />
      <HomepageSectionProducts />
      <HomepageSectionRecipes />
      <HomepageSectionDeserts />

    </main>
  );
}

export default Homepage;
