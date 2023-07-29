import React from 'react'
import ProjectItems from '../Components/ProjectItems'
import '../styles/Project.css'
import {ProjectList} from '../helper/ProjectList'

export const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {ProjectList.map((data,idx)=>{
          return <ProjectItems id={idx} name={data.name} image={data.image}/>
        })}
      </div>
    </div>
  )
}

