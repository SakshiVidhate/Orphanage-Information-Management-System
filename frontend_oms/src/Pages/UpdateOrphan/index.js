import '../CSS/index.css'
import { URL } from '../../config'
import { useLocation, useNavigate } from 'react-router'
import { useState , useEffect } from 'react'
import Navigationbar from '../../Components/Naviagationbar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


const orphanId = sessionStorage.getItem('updateorphanId')
console.log(orphanId)

const UpdateOrphan = () =>{
    const navigate = useNavigate()
    const { state } = useLocation()
    // const { id,setId } = state
    // console.log(id)
   
      

    const [orphanName, setOrphanName] = useState('')
    const [gender, setGender] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [age, setAge] = useState('')
    const [education, setEducation] = useState('')
    const [health, setHealth] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    
useEffect(()=>{
    // sessionStorage.setItem('updateorphanId',orphan.id) 
    //                                             sessionStorage.setItem('updateorphanName',orphan.orphanName)  
    //                                             sessionStorage.setItem('updateorphanGender',orphan.gender)  
    //                                             sessionStorage.setItem('updateorphanBirthDate',orphan.birthDate)  
    //                                             sessionStorage.setItem('updateorphanAge',orphan.age)  
    //                                             sessionStorage.setItem('updateorphanEducation',orphan.education)  
    //                                             sessionStorage.setItem('updateorphanHealth',orphan.health)  
    //                                             sessionStorage.setItem('updateorphanBloodGroup',orphan.bloodGroup)
    //console.log(orphan)
    setOrphanName(sessionStorage.getItem('updateorphanName'))
    setGender( sessionStorage.getItem('updateorphanGender')) 
    setBirthDate(sessionStorage.getItem('updateorphanBirthDate'))  
    setAge(sessionStorage.getItem('updateorphanAge'))
    setEducation(sessionStorage.getItem('updateorphanEducation'))
    setHealth(sessionStorage.getItem('updateorphanHealth'))
    setBloodGroup(sessionStorage.getItem('updateorphanBloodGroup'))
},[])

const UpdateOrphanDetails=()=>{
    if (orphanName.length == 0) {
        toast.warning('Please enter orphan name')
      } else if (education.length == 0) {
        toast.warning('Please enter eduaction details')
    } else if (health.length == 0) {
        toast.warning('Please enter health details')
    } else if (bloodGroup.length == 0) {
        toast.warning('Please enter bloodGroup details')
      } else {
        const body ={
            orphanName,
            gender,
            birthDate,
            age,
            education,
            health,
            bloodGroup
        }
        
        const url = `${URL}/orphan/${orphanId}`
        axios.put(url,body).then((response)=>{
            const result = response.data
            console.log(result)
            if(result['status'] == 'success'){
                toast.success('Successfully Orphan data updated...')
                navigate('/home')
            }else{
                toast.error(result['error'])
            }
        })
    }
}
    return (
        <div>
            {/* Navigation bar */}
            <Navigationbar/>
            <br />
            <h4>Update Orphan Details</h4>
            <hr />
            
            
            <div class="container py-3 h-100">
                <div class="row d-flex p-4 justify-content-center align-items-center h-100">
                    <div className="col-6">
                        <div class="card rounded-3 text-black justify-content-center align-items-center" id ="backdata1">
                            <div className="col-10">
                            <br />
                                <div className="form" name="forms">
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Orphan Name
                                        </label>
                                        <input
                                            value={orphanName}
                                            onChange={(e) => {
                                            setOrphanName(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Gender 
                                        </label>
                                        <input
                                            value={gender}
                                            onChange={(e) => {
                                            setGender(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Birth Date
                                        </label>
                                        <input
                                            value={birthDate}
                                            onChange={(e) => {
                                            setBirthDate(e.target.value)
                                            }}
                                            type="Date"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Age
                                        </label>
                                        <input
                                            value={age}
                                            onChange={(e) => {
                                            setAge(e.target.value)
                                            }}
                                            type="number"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Education
                                        </label>
                                        <input
                                            value={education}
                                            onChange={(e) => {
                                            setEducation(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Health
                                        </label>
                                        <input
                                            value={health}
                                            onChange={(e) => {
                                            setHealth(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Blood Group
                                        </label>
                                        <input
                                            value={bloodGroup}
                                            onChange={(e) => {
                                            setBloodGroup(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    
                                    <br />
                                    <button class="btn btn-dark btn-lg" type="button"onClick={UpdateOrphanDetails}>Update Orphan</button>
                                </div>
                                <br />
                            </div>  
                        </div> 
                    </div> 
                    </div> 
                    </div> 
                    </div>                    
                
    )
}

export default UpdateOrphan