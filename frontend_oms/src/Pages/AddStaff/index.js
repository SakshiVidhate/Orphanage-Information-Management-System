import '../CSS/index.css'
import { URL } from '../../config'
import Navigationbar from '../../Components/Naviagationbar'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const AddStaff = () => {
    const [staffId, setStaffId] = useState('')
    const [staffName, setStaffName] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [salary, setSalary] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfJoining, setDateOfJoining] = useState('')
    const navigate = useNavigate()

    const addNewStaff =()=>{
        if (staffName.length == 0) {
            toast.warning('Please enter orphan name')
          } else if (gender.length == 0) {
            toast.warning('Please enter eduaction details')
           } else if (jobDescription.length == 0) {
            toast.warning('Please enter jobDescription details')
          } else {
            const body = {
                staffId,
                staffName,
                jobDescription,
                salary,
                gender,
                dateOfJoining


            }
        const url = `${URL}/staff/add`
        axios.post(url, body).then((response)=>{
            const result = response.data
            if(result['status'] == 'success')
            {
                toast.success('Successfully added new staff')

                  navigate('/staff')
            }else{
                toast.error('Something went wrong')
            }
        })
        }
        }
        
        return (
            <div>
                {/* Navigation bar */}
                <Navigationbar />
                {/* form */}
                <div id="introo1" class="bg-image shadow-2-strong">
                    <div class="mask mask-custom">
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <div className="col-8">
                                <h3>Add new Staff</h3>
                                <form>
                                       <div class="row g-2">
                                           
                                        {/* <div class="form-floating">
                                            <input onChange={(e) => {
                                            setOrphanId(e.target.value)
                                            }}
                                            type="number" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Staff Id"/>
                                            <label for="floatingInputGrid">Orphan Id</label>
                                        </div>
                                        <br /> */}
                                     
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setStaffName(e.target.value)
                                            }}
                                            type="text" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Staff Name"/>
                                            <label for="floatingInputGrid">Staff Name</label>
                                        </div>
                                        <br />
                                        
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setJobDescription(e.target.value)
                                            }}
                                            type="text" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Job Description"/>
                                            <label for="floatingInputGrid">Job Description</label>
                                        </div>
                                        <br />
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setSalary(e.target.value)
                                            }}
                                            type="number" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Salary "/>
                                            <label for="floatingInputGrid">Salary</label>
                                        </div>
                                        <br />
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setGender(e.target.value)
                                            }}
                                            type="text" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Gender "/>
                                            <label for="floatingInputGrid"> Gender</label>
                                        </div>
                                        <br />
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setDateOfJoining(e.target.value)
                                            }}
                                            type="date" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter DateOfJoining "/>
                                            <label for="floatingInputGrid">Date Of Joining</label>
                                        </div>
                                        
                                     
                                        </div>
                                    <br />
                                    <button className="btn btn-primary btn-lg" onClick={addNewStaff}>Add Staff</button>
                                    <button className="btn btn-light btn-lg">Reset</button>
                                </form> 
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    }
    
    export default AddStaff
    