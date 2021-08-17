import React from 'react'
import { GithubContext } from '../contexts/context'
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md'

export default function Card() {
  const {githubUser} = React.useContext(GithubContext)
  const {avatar_url, html_url, name, company, blog, bio, location, twitter_username} = githubUser

  return (  
    <div className="card">
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{twitter_username && `@${twitter_username}`}</p>
        </div>
        <a href={html_url} className="follow">follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness>{company}
        </p>
        <p>
          <MdLocationOn></MdLocationOn>{location || "earth"}
        </p>
        <p>
          <MdLink></MdLink><a href={`https://${blog}`} className="link_to_profile">{blog}</a>
        </p>
      </div>

    </div>
  )}
