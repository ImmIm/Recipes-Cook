import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import HomepageHero from './HomepageHero'
import HomepageSectionProducts from './HomepageSectionProducts'



function Homepage() {
  return (
    <main>
    <HomepageHero/>
    <HomepageSectionProducts/>
    </main>
  )
}

export default Homepage