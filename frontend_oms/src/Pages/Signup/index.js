import '../CSS/index.css'
import Navigationbar from '../../Components/Naviagationbar'
import axios from 'axios'
import backdata from '../../images/backdata.webp'
import { toast } from 'react-toastify'
import { URL } from '../../config'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'


const Signup = () =>{
    const [ firstName, setFirstname] = useState('')
    const [ lastName, setLastname] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ confirmPassword, setConfirmPassword] = useState('')
    const [ address, setAddress] = useState([])
    const [ contact, setContact] = useState('')
    const [ occupation, setOccupation] = useState('')
    const [ gender,setGender]= useState('')
    const [regDate,setRegDate]= useState('')
    const [ income,setIncome]= useState('')
    const [ govtId,setGovetId]= useState('')
    const navigate  = useNavigate()

    const makenewAddress=()=>{
        const url = `${URL}/address`
        const addressCodeId = '-'
        const addressLine1 = '-'
        const addressLine2 = '-'
        const body ={
            addressCodeId,
            addressLine1,
            addressLine2,
        }
        axios.post(url,body).then((res)=>{
            const result = res.data
            if(result['status'] == 'success'){
                setAddress(result['data'])    
            }else{
                toast.error(result['error'])
            }
        })

    }   
    useEffect(()=>{
        makenewAddress()
    },[])
    
    const signupUser = () =>{
        if(firstName.length == 0){
            toast.warning('Enter the first name')
        }
        else if(lastName.length === 0){
            toast.warning('Enter the last name')
        }
        else if(email.length === 0){
            toast.warning('Enter email')
        }
        else if(password.length < 6){
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
                firstName,
                lastName,
                email,
                password,
                addressId : address.id,
                contact,
                gender,
                regDate,
                occupation,
                govtId,
                income

            }
            const url =`${URL}/user/signup`
            axios.post(url, body).then(response =>{
                const result = response.data
                if(result['status'] == 'success'){
                    toast.success('user signed up successfully')
                    navigate('/signin')
                }else{
                    toast.error(result['error'])
                }
            })
        }
    }
    const tosignin=()=>{
        navigate('/signin')
    }
    return (
        <div>
            {/* Navigation bar */}
            <Navigationbar />

            {/* form */}
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
                                                        <input  type="text" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="User"
                                                                value={'User'}
                                                                disabled
                                                                />
                                                        <label for="floatingInputGrid">Role</label>
                                                    </div>
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="text" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="Tame"
                                                                onChange={(e)=>{
                                                                    setFirstname(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">First Name</label>
                                                    </div>
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="text" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="Title"
                                                                onChange={(e)=>{
                                                                    setLastname(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Last Name</label>
                                                    </div>
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
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="password" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="***"
                                                                onChange={(e)=>{
                                                                    setConfirmPassword(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Confirm Password</label>
                                                    </div>
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="number" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="Tame"
                                                                onChange={(e)=>{
                                                                    setAddress(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Enter Address Id</label>
                                                    </div>
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="text" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="Male/Female/Others"
                                                                onChange={(e)=>{
                                                                    setGender(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Gender</label>
                                                    </div>
                                                    <br />
                                                    

                                                    <div class="form-floating">
                                                        <input  type="text" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="---"
                                                                onChange={(e)=>{
                                                                    setContact(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Contact</label>
                                                    </div>
                                                    <br />


                                                    <div class="form-floating">
                                                        <input  type="text" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="---"
                                                                onChange={(e)=>{
                                                                    setOccupation(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Occupation</label>
                                                    </div>
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="text" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="---"
                                                                onChange={(e)=>{
                                                                    setGovetId(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">GovtId</label>
                                                    </div>
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="Date" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="---"
                                                                onChange={(e)=>{
                                                                    setRegDate(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Registration Date</label>
                                                    </div>
                                                    <br />
                                                    <div class="form-floating">
                                                        <input  type="number" 
                                                                class="form-control" 
                                                                id="floatingInputGrid" 
                                                                placeholder="---"
                                                                onChange={(e)=>{
                                                                    setIncome(e.target.value)
                                                                }}
                                                                />
                                                        <label for="floatingInputGrid">Income</label>
                                                    </div>
                                                    <br />
                                                    
                                                </div>
                                                <br />
                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"onClick={signupUser}>Sign-up</button>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-center pb-4">
                                                    <p class="mb-0 me-2">Already have an account?</p>
                                                    <button type="button" class="btn btn-outline-primary" onClick={tosignin}>Sign-in</button>
                                                </div>
                                            </form>  
                                            
                                        </div>
                                    </div>
                                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2" id ="backdata2">
                                        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 class="mb-4">Create your account</h4>
                                            <p class="small mb-0">One step towards Humanity.</p>
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

export default Signup