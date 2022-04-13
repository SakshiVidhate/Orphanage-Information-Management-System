import '../CSS/index.css'
import { URL } from '../../config'
import { useLocation, useNavigate } from 'react-router'
import { useState , useEffect } from 'react'
import Navigationbar from '../../Components/Naviagationbar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


const staffId = sessionStorage.getItem('updatestaffId')
//console.log(updatestaffId)

const UpdateStaff = () =>{
    const navigate = useNavigate()
    const { state } = useLocation()
    // const { id,setId } = state
    // console.log(id)
   
      

    const [staffName, setStaffName] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [salary, setSalary] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfJoining, setDateOfJoining] = useState('')
    
useEffect(()=>{
   
    setStaffName(sessionStorage.getItem('updatestaffName'))
    setJobDescription(sessionStorage.getItem('updatestaffjobDescription'))
    setSalary(sessionStorage.getItem('updatestaffsalary'))
    setGender(sessionStorage.getItem('updatestaffgender'))
    setDateOfJoining(sessionStorage.getItem('updatestaffdateOfJoining'))
},[])

const UpdateStaffDetails=()=>{
    if (staffName.length == 0) {
        toast.warning('Please enter staff name')
      } else if (jobDescription.length == 0) {
        toast.warning('Please enter jobDescription details')
    } else if (gender.length == 0) {
        toast.warning('Please enter gender details')
    }  else {
        const body ={
            staffName,
            jobDescription,
            salary,
            gender,
            dateOfJoining
        }
        
        const url = `${URL}/staff/${staffId}`
        axios.put(url,body).then((response)=>{
            const result = response.data
            console.log(result)
            if(result['status'] == 'success'){
                toast.success('Successfully Staff data updated...')
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
            <h4>Update Staff Details</h4>
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
                                            Staff Name
                                        </label>
                                        <input
                                            value={staffName}
                                            onChange={(e) => {
                                                setStaffName(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Job Description 
                                        </label>
                                        <input
                                            value={jobDescription}
                                            onChange={(e) => {
                                                setJobDescription(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Salary
                                        </label>
                                        <input
                                            value={salary}
                                            onChange={(e) => {
                                                setSalary(e.target.value)
                                            }}
                                            type="number"
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
                                             Date Of Joining
                                        </label>
                                        <input
                                            value={dateOfJoining}
                                            onChange={(e) => {
                                            setDateOfJoining(e.target.value)
                                            }}
                                            type="Date"
                                            className="form-control"
                                        />
                                    </div>
                                   
                                    <br />
                                    <button class="btn btn-dark btn-lg" type="button"onClick={UpdateStaffDetails}>Update Staff</button>
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

export default UpdateStaff