import React, {useContext} from 'react'
import { GithubContext } from '../contexts/context'
import {ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D} from './Charts'; 

export default function Repos() {
  const {repos} = useContext(GithubContext)
  // console.log(repos)

  const languages = repos.reduce((total, item)=>{
    // creating object with key value pairs

    const {language, stargazers_count} = item
    if (!language) {return total}
    if(!total[language]) {
      total[language] = {label: language, value: 1, stars: stargazers_count}
    } else {
      total[language] = {
                        ...total[language], 
                        value: total[language].value+1, 
                        stars: total[language].stars + stargazers_count,
                      }
    }
    return total
  },{})

  const mostUsed = Object.values(languages).sort((a,b)=> b.value-a.value).slice(0,5)
  // most stars per language
  const mostPopular = Object.values(languages).sort((a,b)=> b.stars - a.stars)
                      .map(item => {
                          return {...item, value: item.stars}
                      })
                      .slice(0,5)

  // stars and forks      
  
  let {stars, forks} = repos.reduce((total, item)=> {
    const {stargazers_count, name, forks} = item
    total.stars[stargazers_count] = {label: name, value: stargazers_count}
    total.forks[forks] = {label:name, value: forks}
    return total
  },{
    stars: {}, 
    forks: {}
  }
  )

  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()

  // const chartData2 = [
  //   { 
  //     label: 'HTML', 
  //     value: '13'
  //   }, 
  //   {
  //     label: 'CSS', 
  //     value: '160', 
  //   }, 
  //   {
  //     label: 'Javascript', 
  //     value: '80', 
  //   }
  // ]; 

  // const chartData = [
  //   {
  //     label: "Venezuela",
  //     value: "290"
  //   },
  //   {
  //     label: "Saudi",
  //     value: "260"
  //   },
  //   {
  //     label: "Canada",
  //     value: "180"
  //   },
  //   {
  //     label: "Iran",
  //     value: "140"
  //   },
  //   {
  //     label: "Russia",
  //     value: "115"
  //   },
  //   {
  //     label: "UAE",
  //     value: "100"
  //   },
  //   {
  //     label: "US",
  //     value: "30"
  //   },
  //   {
  //     label: "China",
  //     value: "30"
  //   }
  // ];
  
  return (
    <div className="repos"> 
      <div className="pie3D chart-background" >
          <Pie3D        chartData={mostUsed}   />
      </div>
      <div className="example chart-background">
         <Doughnut2D     chartData={mostPopular}   />
      </div>
      <div className="example chart-background">
         <Column3D     chartData={stars}   />
      </div>
      <div className="example chart-background">
         <Bar3D     chartData={forks}   />
      </div>
    </div>
  )
} 