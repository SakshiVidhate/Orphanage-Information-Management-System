import '../CSS/index.css'
import { URL } from '../../config'
import { useLocation, useNavigate } from 'react-router'
import { useState , useEffect } from 'react'
import Navigationbar from '../../Components/Naviagationbar'
import axios from 'axios'
import { toast } from 'react-toastify'

const UpdatePersonalDetails = () =>{
    const navigate = useNavigate()
    const { state } = useLocation()
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ contact, setContact ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ gender, setGender ] = useState('')
    const [ regDate, setRegDate ] = useState('')
    const [addressId,setAddressId]=useState('')
    const [occupation,setOccupation]=useState('')
    const [income,setIncome]=useState('')
    const [govtId,setGovtId]=useState('')
    const [dropdown , setDropdown] = useState('')
useEffect(()=>{
    const {user} = state
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setContact(user.contact)
    setEmail(user.email)
    setGender(user.gender)
    setRegDate(user.regDate)
    setAddressId(user.addressId)
    setOccupation(user.occupation)
    setIncome(user.income)
    setGovtId(user.govtId)
},[])

const updateuserdetails=()=>{
    if(firstName.length === 0){
        toast.warning('Enter the First Name')
    }else if(lastName.length === 0){
        toast.warning('Enter the Last Name')
    }else if((contact / 1000000000 < 7 )){
        toast.warning('Enter the proper contact details')
    }else if(email.length === 0){
        toast.warning('Enter the email')
    }else if(gender.length === 0){
        toast.warning('Selectthe gender')
    }else if(regDate.length === 0){
        toast.warning('Select the registration Date')
    }else{

        const body ={
            firstName,
            lastName,
            contact,
            email,
           
            gender,
            regDate,
            addressId,
            occupation,
            income,
            govtId
        }
        const url = `${URL}/user/${state.user.id}`
        axios.post(url,body).then((response)=>{
            const result = response.data
            if(result['status'] == 'success'){
                toast.success('Successfully user data updated...')
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
            <Navigationbar />
            <br />
            <h4>Update Personal Details</h4>
            <hr />
            
            <div class="container py-3 h-100">
                <div class="row d-flex p-4 justify-content-center align-items-center h-100">
                    <div className="col-8">
                        <div class="card rounded-3 text-black justify-content-center align-items-center" id ="backdata1">
                            <div className="col-10">
                            <br />
                                <div className="form" name="forms">
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            First Name
                                        </label>
                                        <input
                                            value={firstName}
                                            onChange={(e) => {
                                            setFirstName(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Last Name
                                        </label>
                                        <input
                                            value={lastName}
                                            onChange={(e) => {
                                            setLastName(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Contact number
                                        </label>
                                        <input
                                            value={contact}
                                            onChange={(e) => {
                                            setPhone(e.target.value)
                                            }}
                                            type="number"
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Email-Id
                                        </label>
                                        <input
                                            value={email}
                                            onChange={(e) => {
                                            setEmail(e.target.value)
                                            }}
                                            type="email"
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
                                            disabled
                                        />
                                    </div>
                                    
                                  
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Registration Date
                                        </label>
                                        <input
                                            value={regDate}
                                            onChange={(e) => {
                                            setBirthDate(e.target.value)
                                            }}
                                            type="date"
                                            className="form-control"
                                        />
                                    </div>
                                   
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Occupation
                                        </label>
                                        <input
                                            value={occupation}
                                            onChange={(e) => {
                                            setLastName(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Govt Id
                                        </label>
                                        <input
                                            value={govtId}
                                            onChange={(e) => {
                                            setGender(e.target.value)
                                            }}
                                            type="text"
                                            className="form-control"
                                            disabled
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                            Income
                                        </label>
                                        <input
                                            value={income}
                                            onChange={(e) => {
                                            setLastName(e.target.value)
                                            }}
                                            type="number"
                                            className="form-control"
                                        />
                                    </div>
                                    <br />
                                    <button class="btn btn-dark btn-lg" type="button"onClick={updateuserdetails}>Update</button>
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

export default UpdatePersonalDetails