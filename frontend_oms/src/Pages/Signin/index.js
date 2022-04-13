import '../CSS/index.css'
import Navigationbar from '../../Components/Naviagationbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import backdata from '../../images/backdata.png'
import { toast } from 'react-toastify'
import { URL } from '../../config'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const Signin = () =>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')    
    const navigate  = useNavigate()
    const signinUser = ()=>{
        if(email.length === 0){
            toast.warning('Enter the email')
        } else if(password.length === 0){
            toast.warning('Enter the password')
        }else{
            const body = {
                            email,
                            password
                        }
            const url = `${URL}/user/signin`
            axios.post(url, body).then(response =>{
                const result  = response.data
                if (result['status'] == 'success') {
                    const { id, firstName, lastName, roleId, addressId } = result['data']
                    toast.success('Welocme ' + firstName)
                    sessionStorage['id'] = id
                    sessionStorage['firstName'] = firstName
                    sessionStorage['lastName'] = lastName
                    sessionStorage['roleId'] = roleId
                    sessionStorage['addressId'] = addressId
                    sessionStorage['loginstatus'] = 1
                    navigate('/home')
                }else{
                    toast.error('Invalid email or password')
                }
            })
        }
    }
    const tosignup=()=>{
        navigate('/signup')
    }
    return (
        <div>  
            {/* Navigation bar */}
            <Navigationbar />

            <section class="h-100 gradient-form" >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-xl-10">
                            <div class="card rounded-3 text-black">
                                <div class="row g-0">
                                    <div class="col-lg-6">
                                        <div class="card-body p-md-5 mx-md-4">
                                            <div class="text-center" >
                                                <img id="databac" src={backdata} alt="logo"/>
                                                <h4 class="mt-1 mb-5 pb-1">Be a changer.</h4>
                                            </div>
                                            <form>
                                                <div class="row g-2">
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="email" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="abc@test.com"
                                                                onChange={(e)=>{
                                                                    setEmail(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Email-Id</label>
                                                    </div>
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="password" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="***"
                                                                onChange={(e)=>{
                                                                    setPassword(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Password</label>
                                                    </div>
                                                </div>
                                                <br />
                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    <button class="btn btn-danger btn-block fa-lg gradient-custom-2 mb-3" type="button"onClick={signinUser}>Sign-in</button>
                                                    <Link class="user-item" to="/changeUserPasswordByEmail">Forget password?</Link>
                                                </div>
                                                <div>
                                                    
                                                </div>
                                                <div class="d-flex align-items-center justify-content-center pb-4">
                                                    <p class="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button" class="btn btn-outline-danger" onClick={tosignup}>Create new</button>
                                                </div>
                                            </form>  
                                            
                                        </div>
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2" id ="backdata">
                                        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 class="mb-4">Sign in to your account</h4>
                                            <p class="small mb-0">One Step towards Humanity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin