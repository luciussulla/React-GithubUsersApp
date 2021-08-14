import React from 'react'
import { InformationEvent, Repos, User, Search, Navbar } from '../components'
import Info from '../components/Info'
// import loadingImage from '../images/Preloader'
import {GithubContext} from '../contexts/context'

export default function Dashboard() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <User/>
      <Info/>
      <Repos/>
    </div>
  )
}
