import React from 'react'
import Ridescard from '../components/Home/Ridescard'
import Banner from '../components/Home/Banner'
import Communityhome from '../components/Home/Communityhome'
import Whychoose from '../components/Home/Whychoose'
import Comfeaturehome from '../components/Home/Comfeaturehome'
import Plans from '../components/Home/plans'
import Card from '../components/Home/Card'
import Testimonial from '../components/Home/Testimonial'
import Blog from '../components/Home/Blog'
const Home = () => {
  return (
    <div>
     <Banner/>
     <Ridescard/>
     <Communityhome/>
     <Whychoose/>
     <Comfeaturehome/>
     <Plans/>
     <Card/>
     <Testimonial/>
     <Blog/>
    </div>
  )
}

export default Home
