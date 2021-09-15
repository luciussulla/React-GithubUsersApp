import React, {useState, useEffect, createContext} from 'react'
import MockUser from './mockData/mockUser'
import MockFollowers from './mockData/mockFollowers'
import MockRepos from './mockData/mockRepos'
import axios from 'axios'

const rootUrl = 'http://api.github.com'

const GithubContext = createContext()

const GithubProvider = ({children})=> {
  const [githubUser, setGithubUser] = useState(MockUser) 
  const [followers, setFollowers]   = useState(MockFollowers)
  const [repos, setRepos]           = useState(MockRepos)
  // request loading
  const [requests, setRequests] = useState(0)
  const [loading, setIsLoading] = useState(false)
  // error 
  const [error, setError] = useState({show: false, msg: ''})

  const searchGithubUser = async(user) => {
    toggleError() // here we clear the error with the default values in the toggleE...
    console.log("search user")
    // toggle error
    // set Loading 
    const response = await axios(`${rootUrl}/users/${user}`).
    catch(err => console.log(err))
    console.log(response)
    if(response){
      setGithubUser(response.data)
    } else {
      toggleError(true, "there are users with that username") 
    }
  }

  const checkRequests = ()=> {
    axios(`${rootUrl}/rate_limit`).then(data=> {
      // console.log(data)
      let {data: {rate: {remaining}}} = data

      setRequests(remaining)
      if(remaining ===0) {
         toggleError(true, 'sorry, you have exceeded you hourly rate limig')
      }
    }).catch(e=> {
      console.log(e)
    })
  }

  function toggleError(show = false, msg = '') {
    setError({show,msg})
  }

  useEffect(checkRequests,[])
  
 return  <GithubContext.Provider
          value={
            {
              githubUser, 
              followers, 
              repos,
              requests, 
              error, 
              searchGithubUser, 
            }
          }>
          {children}
 </GithubContext.Provider>
}

export {GithubContext, GithubProvider} 