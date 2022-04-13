import axios from 'axios'
import { URL } from '../config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import OrphanMappedById from './OrphanMappedById'
import StaffMappedById from './StaffMappedById'
import UserMapperById from './UserMapperById'

const Adoptionmapper = (props) => {
    const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage 
    // const orphanId=sessionStorage['orphanId']
    // const staffId=sessionStorage['staffId']
    // const userId=sessionStorage['userId']
    const {adoption} = props
    const navigate = useNavigate()

    const deleteAdoption =()=>{
        const url = `${URL}/adoption/delete/${adoption.id}`
        axios.delete(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                toast.success('Adoption deleted successfully')
                window.location.reload(false)
                
            }else{
                toast.error('Adoption deletion activity failed')
            }
        })
    }
 
    
    return(
        <div>
            <div key={adoption.userId}>
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
                                    
                                    <th>adoptionStatus</th>
                                    <td>{adoption.status}</td>    
                                </tr>
                                
                                <tr>
                                    <th>Registration Date</th>
                                    <td>{adoption.regDate}</td>   
                                    
                                </tr>                                                                                          
                            </tbody>
                        </table>                     
                        <div class="row">
                            <div>
                            <hr />
                            {
                                        roleId == 1 && (
                            <button class="btn btn-danger btn-lg" type="button" onClick={deleteAdoption}>Delete Adoption</button>      
                                        )}
                            
                        </div>                         
                        </div>
                    </div>
                </div>
            </div> 
            <br />
        </div>
    )



}

export default Adoptionmapper
