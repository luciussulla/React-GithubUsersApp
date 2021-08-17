import React, {useContext} from 'react'
import { GithubContext } from '../contexts/context'
import {GoRepo,  GoGist} from 'react-icons/go'
import {FiUsers, FiUserPlus} from 'react-icons/fi'

export default function Info() {
  // const {data} = useContext(GithubContext)
  const  {
    githubUser, 
  } = useContext(GithubContext)

  const {public_repos, followers, following, public_gists} = githubUser

  // console.log(githubUser)
  // console.log(repos)
  // console.log(followers)

  const items = [
    {
      id: 1, 
      icon: <GoRepo className='icon'/>, 
      label: 'repos', 
      value: public_repos, 
      color: 'pink',
    }, 
    {
      id: 2, 
      icon: <FiUsers className='icon'/>, 
      label: 'followers', 
      value: followers, 
      color: 'green',
    }, 
    {
      id: 3, 
      icon: <FiUserPlus className='icon'/>, 
      label: 'following', 
      value: following, 
      color: 'purple',
    }, 
    {
      id: 4, 
      icon: <GoGist className='icon'/>, 
      label: 'gists', 
      value: public_gists, 
      color: 'yellow',
    }, 
  ]

  const Item = ({icon, label, value, color})=> {
    return (
      <article className="item">
        <span>{icon}</span>
        <div>
          <h3>{label}</h3>
          <p>{value}</p>
        </div>
      </article>
    )
  }

  return (
    <div className="info">
      {
        items.map((item)=>{
          return <Item key={item.id} {...item} />
        })
      }
    </div>
  )
}

