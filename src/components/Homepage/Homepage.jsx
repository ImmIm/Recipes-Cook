
import React from 'react'
import HomepageHero from './HomepageHero'
import HomepageSectionProducts from './HomepageSectionProducts'
import HomepageSectionRecipes from './HomepageSectionRecipes'
import HomepageSectionDeserts from './HomepageSectionDeserts'




function Homepage() {
  return (
    <main>
    <HomepageHero/>
    <HomepageSectionProducts/>
    <HomepageSectionRecipes/>
    <HomepageSectionDeserts />
    </main>
  )
}

export default Homepage