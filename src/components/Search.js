import React from 'react'
import {MdSearch} from 'react-icons/md'
import {GithubContext} from '../contexts/context'

const Search = () => {
  const [user, setUser] = React.useState('')
  const {requests, searchGithubUser} = React.useContext(GithubContext)
  const {error: {msg}} = React.useContext(GithubContext)
  const {error: {show}} = React.useContext(GithubContext)
  // const {error} = React.useContext(GithubContext);
   // get things from flobal context

  const handleSubmit = (e)=> {
    e.preventDefault()
    // more loginc soon
    if(user) {
      searchGithubUser(user)
    }
  }

  return (
    <div className="search">
       <form onSubmit={handleSubmit}>
           {show && <p>{msg}</p>}
          <div className="form-control">
            <MdSearch className="spyglass_icon"/>
            <input type="text" placeholder='enter github user' value={user} onChange={(e)=> setUser(e.target.value)}/>
            { requests > 0 && <button type="submit">search</button>}
          </div>
        </form> 
        <h3>requests: {requests}/60 </h3>
    </div>
  )
}

export default Search

