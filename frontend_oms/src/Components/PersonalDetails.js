import RoleData from './Roledata'

const PersonalDetails = (props) =>{
    const { user } = props
    return(
        <div>
            {
            user &&
            <div key={user.id}>
                <div class="container-m">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-12">
                            <div class="card rounded-3 text-black" id ="backdata1"  >
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <th>First Name</th>
                                            <td>{user.firstName}</td>   
                                        </tr>
                                        <tr> 
                                            <th>Last Name</th>
                                            <td>{user.lastName}</td>        
                                        </tr>
                                        <tr> 
                                            <th>Email-Id</th>
                                            <td>{user.email}</td>        
                                        </tr>
                                        <tr>
                                            <th>Role</th>
                                            <td><RoleData userRoleId = {user.roleId}/></td>    
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
                                            <th>Income </th>
                                            <td>{user.income}</td>        
                                        </tr>                                                   
                                    </tbody>
                                </table>    
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            }
        </div>  
    )
}
export default PersonalDetails