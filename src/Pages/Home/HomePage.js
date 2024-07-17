import React from 'react'
import Header from '../../components/Home/Header/Header'
import Banner from '../../components/Home/Banner/Banner'
import Posts from '../../components/Home/Post/Post'
import Footer from '../../components/Home/Footer/Footer'
function HomePage() {
  return (
    <div>
      <Header/>
       <Banner/>
       <Posts/>
       <Footer/>
    </div>
  )
}

export default HomePage
