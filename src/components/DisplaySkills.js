import React from 'react'

const DisplaySkills = ({skills,deleteSkill}) => {
    return (
        <div className="skills">
            {skills.map((skill)=>{
                return <div className="skill">{skill.name} <span className="fas fa-times" onClick={(e)=>deleteSkill(skill.id)}></span></div>
            })}
        </div>
    )
}

export default DisplaySkills
