import React from 'react'
import { GithubContext } from '../contexts/context'
import {ExampleChart, Pie3D, Column3D, Bar3D} from './Charts'; 

export default function Repos() {
  const chartData2 = [
    { 
      label: 'HTML', 
      value: '13'
    }, 
    {
      label: 'CSS', 
      value: '160', 
    }, 
    {
      label: 'Javascript', 
      value: '80', 
    }
  ]; 

  const chartData = [
    {
      label: "Venezuela",
      value: "290"
    },
    {
      label: "Saudi",
      value: "260"
    },
    {
      label: "Canada",
      value: "180"
    },
    {
      label: "Iran",
      value: "140"
    },
    {
      label: "Russia",
      value: "115"
    },
    {
      label: "UAE",
      value: "100"
    },
    {
      label: "US",
      value: "30"
    },
    {
      label: "China",
      value: "30"
    }
  ];
  
  return (
    <div className="repos">
      <div className="example chart-background">
          <ExampleChart chartData={chartData}    />
       </div>   
      <div className="pie3D chart-background" >
          <Pie3D        chartData={chartData2}   />
      </div>
    </div>
  )
}