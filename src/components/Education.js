import React from 'react'
import {useState} from 'react';
const Education = ({addEducation}) => {
    const [eduobject,seteduobject]=useState({
        course:'',
        specialisation:'',
        institute:'',
        dos:'',
        doc:''
    });

    const setEdu=(e)=>{
        e.preventDefault();
        let name=e.target.name;
        let value=e.target.value;
        seteduobject((eduobject)=>{
            return {...eduobject,[name]:value}
        })
    }
    return (
        <div className="education-details">
        <h1>Education Details</h1>
        <form>
            <label>Enter course</label>
            <input type="text" placeholder="Enter degree" name="course" value={eduobject.course} onChange={(e)=>setEdu(e)} />
            <label>Enter specialisation</label>
            <input type="text" name="specialisation" placeholder="Enter specialisation" value={eduobject.specialisation} onChange={(e)=>setEdu(e)}/>
            <label>Enter Institute Name:</label>
            <input type="text" name="institute" placeholder="Enter institute name" value={eduobject.institute} onChange={(e)=>setEdu(e)}/>
            <label>Starting Date:</label>
            <input type="date" name="dos" value={eduobject.dos} onChange={(e)=>setEdu(e)}/>
            <label>Completion Date:</label>
            <input type="date" name="doc" value={eduobject.doc} onChange={(e)=>setEdu(e)}/>
            <div>
              {/*  <Button content="Submit" onClick={(e)=>addEducation(e,this.state)}/>
                <Button content="Add"/>*/}
                <button onClick={(e)=>{
                    e.preventDefault();
                  
                    if(eduobject.course=='' || eduobject.specialisation=='' || eduobject.institute=='' || eduobject.dos=='' || eduobject.doc=='')
                    {
                        window.alert('please fill all the entries');
                    }
                    else{
                        addEducation(eduobject);
                        seteduobject({course:'',specialisation:'',institute:'',dos:'',doc:''});
                    }
                    
                }}>Save</button>
                {/*<button >Add</button>*/}
            </div>
        </form>
    </div>
    )
}

export default Education
