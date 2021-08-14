import React, {useContext} from 'react'
import { GithubContext } from '../contexts/context'

export default function Info() {
  // const {data} = useContext(GithubContext)
  const  {
    githubUser, 
    followers, 
    repos,
  } = useContext(GithubContext)

  console.log(githubUser)
  console.log(repos)
  console.log(followers)

  return (
    <div>
      
    </div>
  )
}

