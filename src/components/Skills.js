import React from 'react'
import {useState} from 'react';
const Skills = ({addSkill}) => {
    const [skill,setskill]=useState({name:''});
    return (
        <div>
            <h1>Skills</h1>
            <form>
            <label>Enter Skill</label>
            <input type="text" value={skill.name} onChange={(e)=>setskill({name:e.target.value})} placeholder="" />
            <div><button onClick={(e)=>
            {
                e.preventDefault();
                if(skill.name=='')
                {
                    window.alert('please enter skill field');
                }
                else{
                addSkill(skill);
                setskill({name:''});
                }
            }
            }>Save</button></div>
            </form>
        </div>
    )
}

export default Skills
