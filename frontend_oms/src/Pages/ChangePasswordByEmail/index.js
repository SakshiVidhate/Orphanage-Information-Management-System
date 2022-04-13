import '../CSS/index.css'
import { URL } from '../../config'
import { useLocation, useNavigate } from 'react-router'
import { useState , useEffect } from 'react'
import Navigationbar from '../../Components/Naviagationbar'
import axios from 'axios'
import { toast } from 'react-toastify'

const ChangeUserPasswordByEmail =()=>{
const navigate = useNavigate()
const [ password, setPassword ] = useState('')
const [ confirmPassword, setConfirmPassword ] = useState('')
const [ email, setEmail ] = useState('')

const ChangeUserPasswordData = () =>{
    if(email.length === 0){
        toast.warning('Enter the email')
    } else if(password.length < 6){
        toast.warning('Enter the password more than 6 digits')
    }
    else if(confirmPassword.length < 6){
        toast.warning('Confirm the password')
    }
    else if(confirmPassword != password){
        toast.warning('Password mismatch')
    }
    else{
        const body = {
            email,
            password,
        }
        const url = `${URL}/user/updatePassword`
        axios.post(url, body).then((response)=>{
            const result = response.data
            if(result['status'] == 'success'){
                toast.success('Password updated successfully')
                navigate('/signin')
            }else{
                toast.error('There is error in password updation')
            }
        })
    }
}
    return(
        <div>
        {/* Navigation bar */}
        <Navigationbar />
        <br />
        <h4>Update Address Region</h4>
        <hr />
            <div class="container py-3 h-100">
                <div class="row d-flex p-4 justify-content-center align-items-center h-100">
                    <div className="col-8">
                        <div class="card rounded-3 text-black justify-content-center align-items-center" id ="backdata1">
                            <div className="col-10">
                                <br />
                                <h6>Enter data below to update password</h6>
                                <div className="form" name="forms">
                                <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                        Email Id
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            onChange={(e)=>{setEmail(e.target.value)}}                               
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                        New password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            onChange={(e)=>{setPassword(e.target.value)}}                               
                                        />
                                    </div> 
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                        Confirm new password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            onChange={(e)=>{setConfirmPassword(e.target.value)}}                               
                                        />
                                    </div> 
                                    <button className="btn btn-dark btn" type="button" onClick={ChangeUserPasswordData}>Change Password</button>
                                </div>
                                <br />
                            </div>  
                        </div> 
                    </div>                     
                </div>
                <br />

            </div> 
        
        </div>
    )
}
export default ChangeUserPasswordByEmail