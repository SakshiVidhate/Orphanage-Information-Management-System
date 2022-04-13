import { URL } from "../config"
import axios from "axios"
import { toast } from "react-toastify"
import { useState, useEffect } from 'react'
import UserMapperById from './UserMapperById'


const Adoptiondata =(props)=>{
    const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage 

    const {adoption} = props
    const changestatus =()=>{
        const url = `${URL}/adotpion/status/${adoption.id}`
        axios.put(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                toast.success('adoption status changed successfully')
                window.location.reload(false)
                
            }else{
                toast.error('adoption status change activity failed')
            }
        })
    }

    const deleteAdotpion =()=>{
        const url = `${URL}/adoption/delete/${adoption.id}`
        axios.delete(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                toast.success('adoption records deleted successfully')
                window.location.reload(false)
                
            }else{
                toast.error('adoption deletion activity failed')
            }
        })
    }

    return (
        <div>
            <div key={adoption.id}>
                <div class="row d-flex justify-content-center align-items-center h-100"style={{width:'50em'}}>
                    <div class="card rounded-3 text-black" id ="backdata12"  >
                        <table class="table table-borderless" >
                        <tbody>
                                <tr>
                                    <th>User Name</th>
                                    <td><UserMapperById id={adoption.userId}/></td> 
                                    <th>Orphan Name</th>
                                    <td><OrphanMappedById id={adoption.orphanId}/></td>
                                </tr>
                              
                                <tr>
                                <th>Staff Name</th>
                                    <td><StaffMappedById id={adoption.staffId}/></td>
                                    <th>Status</th>
                                    <td>{adoption.status}</td>    
                                </tr>
                                
                                <tr>
                                    <th>Registration Date</th>
                                    <td>{adoption.regDate}</td>   
                                    
                                </tr>                                                                                          
                            </tbody>
                        </table> 
                        <div>
                        {
                                        roleId == 1 && (
                                <div>
                                    <hr />
                                    
                                    <button class="btn btn-danger " type="button" onClick={deleteAdotpion}>Delete Adoption</button>      
                                </div>
                            )   
                        }
                        </div>   
                    </div>
                </div>
            </div> 
            <br />
        </div>
    )
}

export default Adoptiondata