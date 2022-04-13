import '../CSS/index.css'
import { URL } from '../../config'
import Navigationbar from '../../Components/Naviagationbar'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router'

const AddOrphan = () => {
    const [orphanId, setOrphanId] = useState('')
    const [orphanName, setOrphanName] = useState('')
    const [gender, setGender] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [age, setAge] = useState('')
    const [education, setEducation] = useState('')
    const [health, setHealth] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const navigate = useNavigate()

    const addNewOrphan =()=>{
        if (orphanName.length == 0) {
            toast.warning('Please enter orphan name')
          } else if (education.length == 0) {
            toast.warning('Please enter eduaction details')
        } else if (health.length == 0) {
            toast.warning('Please enter health details')
        } else if (bloodGroup.length == 0) {
            toast.warning('Please enter bloodGroup details')
          } else {
            const body = {
                orphanId,
                orphanName,
                gender,
                birthDate,
                age,
                education,
                health,
                bloodGroup

            }
        const url = `${URL}/orphan/add`
        axios.post(url, body).then((response)=>{
            const result = response.data
            if(result['status'] == 'success')
            {
                toast.success('Successfully added new child')
               navigate('/orphan')
                // navigate to the home page
                
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
                                <h3>Add new orphan</h3>
                                <form>
                                       <div class="row g-2">
                                           
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setOrphanId(e.target.value)
                                            }}
                                            type="number" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Orphan Id"/>
                                            <label for="floatingInputGrid">Orphan Id</label>
                                        </div>
                                        <br />
                                     
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setOrphanName(e.target.value)
                                            }}
                                            type="text" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Orphan Name"/>
                                            <label for="floatingInputGrid">Orphan Name</label>
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
                                            setBirthDate(e.target.value)
                                            }}
                                            type="Date" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter BirthDate"/>
                                            <label for="floatingInputGrid">BirthDate</label>
                                        </div>
                                        <br />
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setAge(e.target.value)
                                            }}
                                            type="number" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Age "/>
                                            <label for="floatingInputGrid">Age</label>
                                        </div>
                                        <br />
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setEducation(e.target.value)
                                            }}
                                            type="text" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Education "/>
                                            <label for="floatingInputGrid">Education</label>
                                        </div>
                                        <br />
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setHealth(e.target.value)
                                            }}
                                            type="text" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter Health "/>
                                            <label for="floatingInputGrid"> Health</label>
                                        </div>
                                        <br />
                                        <div class="form-floating">
                                            <input onChange={(e) => {
                                            setBloodGroup(e.target.value)
                                            }}
                                            type="text" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter BloodGroup "/>
                                            <label for="floatingInputGrid"> Blood Group</label>
                                        </div>
                                        </div>
                                    <br />
                                    <button className="btn btn-primary btn-lg" onClick={addNewOrphan}>Add Orphan</button>
                                    <button className="btn btn-light btn-lg">Reset</button>
                                </form> 
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    }
    
    export default AddOrphan
    