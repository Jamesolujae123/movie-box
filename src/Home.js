import React from 'react'
import FeaturedMovie from './featuredMovie';
import Hero from './Hero';
import Arrival from './nwarrival';
import People from './people';


const Home = () => {
  return (
    <div>
    <Hero />
    <FeaturedMovie />
    <Arrival />
    <People />
    </div>
  )
}

export default Home