import '../CSS/index.css'
import { URL } from '../../config'
import { useLocation, useNavigate } from 'react-router'
import { useState , useEffect } from 'react'
import Navigationbar from '../../Components/Naviagationbar'
import axios from 'axios'
import { toast } from 'react-toastify'

const UpdateAddressCodeDetails =()=>{
const navigate = useNavigate()
const [ postalCode, setPostalCode ] = useState('')
const [ addressCode, setAddressCode ] = useState([])

const GetAddressCodeDetails = () =>{
    if(postalCode.length != 6){
        toast.warning('Enter proper postal code')
    }else {
        const url = `${URL}/addressCode/all/${postalCode}`
        axios.get(url).then((response)=>{
            const result = response.data
            if(result['status'] == 'success'){
                setAddressCode(result['data'])
            }else{
                toast.error(result['error'])
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
                                <h6>To update region address enter new postal code</h6>
                                <div className="form" name="forms">
                                    <div className="mb-3">
                                        <label htmlFor="" className="label-control">
                                        Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e)=>{setPostalCode(e.target.value)}}                               
                                        />
                                    </div> 
                                    <button className="btn btn-dark btn" type="button" onClick={GetAddressCodeDetails}>Select Region</button>
                                    
                                    <h6>Region address for new postal code</h6>
                                    <div className="form" name="forms">
                                        <div className="mb-3">
                                            <label htmlFor="" className="label-control">
                                            taluka
                                            </label>
                                            <input
                                                value={addressCode.taluka}
                                                type="text"
                                                className="form-control"
                                                disabled
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="" className="label-control">
                                            city
                                            </label>
                                            <input
                                                value={addressCode.city}
                                                type="text"
                                                className="form-control"
                                                disabled
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="" className="label-control">
                                            state
                                            </label>
                                            <input
                                                value={addressCode.rajya}
                                                type="text"
                                                className="form-control"
                                                disabled
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="" className="label-control">
                                            country
                                            </label>
                                            <input
                                                value={addressCode.country}
                                                type="text"
                                                className="form-control"
                                                disabled
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="" className="label-control">
                                            postalCode
                                            </label>
                                            <input
                                                value={addressCode.postalCode}
                                                type="number"
                                                className="form-control"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                                                 
                                    <button className="btn btn-dark" 
                                        onClick={() => {navigate('/updateAddressDetails', { state: { addressCode : addressCode } })}}>
                                        Update Region
                                    </button>   
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
export default UpdateAddressCodeDetails