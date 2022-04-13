import RoleData from "./Roledata"
import { URL } from "../config"
import axios from "axios"
import { toast } from "react-toastify"



const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage 
const Userdata =(props)=>{
    const {user} = props
    const changerole =()=>{
        const url = `${URL}/user/${user.id}`
        axios.put(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                toast.success('Users role changed successfully')
                window.location.reload(false)
                
            }else{
                toast.error('Users role change activity failed')
            }
        })
    }

    const deleteuser =()=>{
        const url = `${URL}/user/${user.id}`
        axios.delete(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                toast.success('Users deleted successfully')
                window.location.reload(false)
                
            }else{
                toast.error('Users deletion activity failed')
            }
        })
    }

    return (
        <div>
            <div key={user.id}>
                <div class="row d-flex justify-content-center align-items-center h-100"style={{width:'50em'}}>
                    <div class="card rounded-3 text-black" id ="backdata12"  >
                        <table class="table table-borderless" >
                            <tbody>
                                <tr>
                                    <th>First Name</th>
                                    <td>{user.firstName}</td> 
                                    <th>Last Name</th>
                                    <td>{user.lastName}</td>   
                                </tr>
                                <tr>
                                            <th>Gender</th>
                                            <td>{user.gender}</td>        
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{user.contact}</td>    
                                        </tr>
                                        <tr>
                                            <th>Registration Date</th>
                                            <td>{user.regDate}</td>        
                                        </tr> 
                                      
                                        <tr>
                                            <th>Occupation</th>
                                            <td>{user.occupation}</td>        
                                        </tr> 
                                        
                                        <tr>
                                            <th>Goverment Id</th>
                                            <td>{user.govtId}</td>        
                                        </tr> 
                                        
                                        <tr>
                                            <th>Income </th>
                                            <td>{user.income}</td>        
                                        </tr>                                              
                            </tbody>
                        </table> 
                        <div>
                            {
                            roleId!=1 &&(
                                <div>
                                    <hr />
                                    <button class="btn btn-info " type="button" onClick={changerole}>Change Role</button> 
                                    <button class="btn btn-danger " type="button" onClick={deleteuser}>Delete user</button>      
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

export default Userdata