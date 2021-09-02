import React from 'react'
import { GithubContext } from '../contexts/context'

export default function Followers() {
  const {followers} = React.useContext(GithubContext)

  return (
    <div className="followers">
        {followers.map((follower, idx)=> {
          const {avatar_url: img, html_url, login} = follower
          return <article key={idx}>
            <img src={img} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>{html_url}</a>
            </div>
          </article>
        })}
    </div>
  )
}
