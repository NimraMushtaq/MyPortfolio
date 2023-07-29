import React from 'react'
import { ProjectList } from '../helper/ProjectList'
import { useParams } from 'react-router-dom'
import '../styles/ProjectsDisplay.css'
import { FaGithub } from 'react-icons/fa';

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt={`${project.name}`} />
            <p>
                <b>Skills:</b>{project.skills}
            </p>
            <div>
                <a href={project.link} target='_blank' rel="noreferrer"><FaGithub /></a>
            </div>
        </div>
    )
}

export default ProjectDisplay