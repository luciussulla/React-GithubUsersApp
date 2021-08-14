import React, {useState, useEffect, createContext} from 'react'
import MockUser from './mockData/mockUser'
import MockFollowers from './mockData/mockFollowers'
import MockRepos from './mockData/mockRepos'
import axios from 'axios'

const url = 'http://api.github.com'

const GithubContext = createContext()

const GithubProvider = ({children})=> {
  const [githubUser, setGithubUser] = useState(MockUser) 
  const [followers, setFollowers]   = useState(MockFollowers)
  const [repos, setRepos]           = useState(MockRepos)

 return  <GithubContext.Provider
          value={
            {
              githubUser, 
              followers, 
              repos,
            }
          }>
          {children}
 </GithubContext.Provider>
}

export {GithubContext, GithubProvider} 
