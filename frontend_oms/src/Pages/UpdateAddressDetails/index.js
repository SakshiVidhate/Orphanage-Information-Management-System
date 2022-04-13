import '../CSS/index.css'
import { Link } from 'react-router-dom'
import { URL } from '../../config'
import { useLocation, useNavigate } from 'react-router'
import { useState , useEffect } from 'react'
import Navigationbar from '../../Components/Naviagationbar'
import axios from 'axios'
import { toast } from 'react-toastify'

const UpdateAddressDetails =()=>{
    const  addressId  = sessionStorage['addressId']
    const navigate  = useNavigate()
    const { state } = useLocation()
    const [ addressLine1, setAddressLine1] = useState('')
    const [ addressLine2, setAddressLine2] = useState('')
    const [ addressCodeId, setAddressCodeId] = useState('')

useEffect (()=>{
    const {addressCode} = state
    setAddressCodeId(addressCode.id)
},[])

const updateAddressData=()=>{
    const id = addressId
    const id2 = addressCodeId
    if(addressLine1.length < 5){
        toast.warning('Enter address line 1')
    }else if(addressLine2.length < 5){
        toast.warning('Enter address line 2')
    }else {
        const url = `${URL}/address/${id}`
        const body = {
            addressCodeId,
            addressLine1,
            addressLine2,
        }
        console.log(addressCodeId)
        axios.put( url , body ).then((response) =>{
            const result = response.data
            if(result['status'] == 'success'){
                toast.success('Address updated successfully')
                sessionStorage['addressId'] = id
                navigate('/home')
            }else{
                toast.error('Address updation failed')
            }
        })
    }
}

    return(
        <div>
        {/* Navigation bar */}
        <Navigationbar />

        <br />
        
        <h4>Updated Address Locale</h4>
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
                                    Address Line-1
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e)=>{setAddressLine1(e.target.value)}}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="" className="label-control">
                                    Address Line-2
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e)=>{setAddressLine2(e.target.value)}}
                                    />
                                </div>

                                <button className="btn btn-dark" onClick={updateAddressData}>Update Address</button>  
                                    
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
export default UpdateAddressDetails