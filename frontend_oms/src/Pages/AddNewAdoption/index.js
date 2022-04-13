import '../CSS/index.css'
import { URL } from '../../config'
import logo from '../../images/logo_E_Dark.jpg'

import Navigationbar from '../../Components/Naviagationbar'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddNewAdoption = () =>{
    const [id, setId] = useState('')
    const [orphanId, setOrphanId] = useState('')
    const [userId, setUserId] = useState('')
    const [staffId, setStaffId] = useState([])
    const [status, setStatus] = useState('')
    const [regDate, setRegDate] = useState('')
   

    const navigate  = useNavigate()
    
    const addNewAdoption =()=>{
        if (userId.length == 0) {
            toast.warning('Please enter userId')
          } else if (orphanId.length == 0) {
            toast.warning('Please enter orphanId')
          } else if (staffId.length == 0) {
            toast.warning('Please enter staffId')
          }else if (regDate.length == 0) {
            toast.warning('Please enter regDate ')
          } 
          
          else {
            const body = {
                id,
                orphanId,
                userId,
                staffId,
                status,
                regDate
            }
            console.log(status)
        const url = `${URL}/adoption/add`
        axios.post(url, body).then((response)=>{
        const result = response.data
            if(result['status'] == 'success')
            {
                toast.success('Successfully added new adoption')
                window.location.reload(false)
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
            <br/>
            <div className="row">
                <div className="col-7">
                    <br />
                    <h3>Add New Adoption</h3>
                
                    <div class="row g-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input 
                            value={id}
                            onChange={(e) => {
                            setId(e.target.value)
                            }} type="number" class="form-control" id="floatingInput"/>
                            <label for="floatingInput">Enter Id</label>
                        </div>
                        </div>
                        <div class="col-md">
                        <div class="form-floating">
                            <input 
                            value={orphanId}
                            onChange={(e) => {
                            setOrphanId(e.target.value)
                            }} type="number" class="form-control" id="floatingInput"/>
                            <label for="floatingInput">Enter orphanId </label>
                        </div>
                        </div>
                        <div class="col-md">
                        <div class="form-floating">
                            <input 
                            value={userId}
                            onChange={(e) => {
                            setUserId(e.target.value)
                            }} type="number" class="form-control" id="floatingInput"/>
                            <label for="floatingInput">Enter UserId</label>
                        </div>
                        </div>
                        <div class="col-md">
                        <div class="form-floating">
                            <input 
                            value={staffId}
                            onChange={(e) => {
                            setStaffId(e.target.value)
                            }} type="number" class="form-control" id="floatingInput"/>
                            <label for="floatingInput">Enter StaffId</label>
                        </div>
                        </div>
                        <div class="col-md">
                        <div class="form-floating">
                            <input 
                            value={status}
                            onChange={(e) => {
                            setStatus(e.target.value)
                            }} type="text" class="form-control" id="floatingInput"/>
                            <label for="floatingInput">Adoption Status</label>

                            {/* <div class="form-floating">
                                            <input onChange={(e) => {
                                            setAdoptionStatus(e.target.value)
                                            }}
                                            type="text" class="form-control"
                                            id="floatingInputGrid" 
                                            placeholder="Enter AdoptionStatus "/>
                                            <label for="floatingInputGrid">Adoption Status</label>
                                        </div> */}
                        </div>
                        </div>
                        <div class="col-md">
                        <div class="form-floating">
                            <input 
                            value={regDate}
                            onChange={(e) => {
                            setRegDate(e.target.value)
                            }} type="date" class="form-control" id="floatingInput"/>
                            <label for="floatingInput">Registration Date</label>
                        </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-danger btn-lg" onClick={addNewAdoption}>Confirm</button>
                    <button className="btn btn-secondary btn-lg">Reset</button>
                    <br />
                    <br />
                </div>

            </div>
        </div>
    )
}

export default AddNewAdoption