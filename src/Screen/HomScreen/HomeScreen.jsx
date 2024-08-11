import React from 'react'
import './HomeScreen.css'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <HomeBanner/>
      <HomeDetails/>
      
    </div>
  )
}

export default HomeScreen