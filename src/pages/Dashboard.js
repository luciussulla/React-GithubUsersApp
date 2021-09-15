import React from 'react'
import { InformationEvent, Repos, User, Search, Navbar } from '../components'
import Info from '../components/Info'
import loadImage from '../images/giphy.gif'
// import loadingImage from '../images/Preloader'
import {GithubContext} from '../contexts/context'

export default function Dashboard() {
  const {isLoading} = React.useContext(GithubContext)
  if(isLoading) {
    return <div >
       <Navbar/>
       <div className="gif-wrapper">
       <Search/>
       <img src={loadImage} className="loading-img" alt="img"/>
       </div>
      
      
    </div>
  }

  return (
    <div className="wrapper">
        <Navbar/>
      <div className="container"> 
        <Search/>
        <User/>
        <Info/>
        <Repos/>
      </div>
    </div>
  )
}
