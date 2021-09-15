import React from 'react'
import {MdSearch} from 'react-icons/md'
import {GithubContext} from '../contexts/context'

const Search = () => {
  const [user, setUser] = React.useState('')
  // get things from flobal context

  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(user)
    // more loginc soon
    if(user) {
      
      
    }
  }

  return (
    <div className="search">
       <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch className="spyglass_icon"/>
            <input type="text" placeholder='enter github user' value={user} onChange={(e)=> setUser(e.target.value)}/>
            <button type="submit">search</button>
          </div>
        </form> 
        <h3>requests: 60/60 </h3>
    </div>
  )
}

export default Search

