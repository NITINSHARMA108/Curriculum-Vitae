import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import General from './components/General';
import DisplayGeneral from './components/DisplayGeneral';
import Education from './components/Education';
import Experience from './components/Experience';
import DisplayEdu from './components/DisplayEdu';
import DisplayExp from './components/DisplayExp';
import Skills from './components/Skills';
import DisplaySkills from './components/DisplaySkills';
function App() {
  const [generalProp,setgeneralProp]=useState({
    fname:'nitin',
    lname:'sharma',
    email:'abc@gmail.com',
    phone:'935XXXXX18',
    desc:'Student'
  });
  const [skills,setskills]=useState([]);
  const [education,seteducation]=useState([]);
  const [experience,setexperience]=useState([]);
  const changegeneralProp=({fname,lname,email,phone,desc})=>{
      setgeneralProp(
        {
          fname:fname,
          lname:lname,
          email:email,
          phone:phone,
          desc:desc
        }
      )
      
  }

  const addEducation=(obj)=>{
    seteducation((education)=>{
      let eduid;
      if(education.length==0)
      {
        eduid=1;
      }
      else{
        eduid=education[education.length-1].eduid+1;
      }
      obj['eduid']=eduid;
      return [obj,...education];
    }
    )
  }

  const addExperience=(obj)=>{
    setexperience((experience)=>{
      let expid;
      if(experience.length==0)
      {
        expid=1;
      }
      else{
        expid=experience[experience.length-1].expid+1;
      }
      obj['expid']=expid;
      return [obj,...experience];
    })
  }

  const addSkill=(obj)=>{
    let id;
    if(skills.length==0)
    {
      id=1;
    }
    else{
      id=skills[skills.length-1].id+1;
    }
    obj=obj={...obj,id};
    setskills((skills)=>{
      return [...skills,obj];
    })


  }

  const changeExperience=(id)=>{
    
      setexperience(()=>{
        return experience.filter((e)=>e.expid!=id);
      })
  }
  const changeEducation=(id)=>{
    
      seteducation(()=>{
        return education.filter((e)=>e.eduid!=id);
      })

  }
  const deleteSkill=(id)=>{
    setskills((skills)=>{
      return skills.filter((s)=>s.id!==id);
    })
  }

  useEffect(() => {
    
    
  }, []);
  console.log(generalProp);
  return (
    <div className="App">
      <div className="cv_template">
        <General changegeneralProp={changegeneralProp}/>
        
        <Education  addEducation={addEducation}/>
        <Skills addSkill={addSkill}/>
        <Experience addExperience={addExperience}/>
      </div>
      <div className="display">
        <DisplayGeneral generalProp={generalProp}/>
        <h1 style={{color:'#666'}}>Education</h1>
        <DisplayEdu edu={education} changeEducation={changeEducation}/>
        <h1 style={{color:'#666'}}>Skills</h1>
        <DisplaySkills skills={skills} deleteSkill={deleteSkill} />
        <h1 style={{color:'#666'}}>Experience</h1>
        <DisplayExp exp={experience} changeExperience={changeExperience}/>
      </div>
    </div>
  );
}

export default App;

