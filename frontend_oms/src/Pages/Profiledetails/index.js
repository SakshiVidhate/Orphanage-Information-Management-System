import '../CSS/index.css'
import { URL } from '../../config'
import { useEffect , useState} from 'react'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import Navigationbar from '../../Components/Naviagationbar'
import PersonalDetails from '../../Components/PersonalDetails'
import AddressDetails from '../../Components/AddressDetails'


const Profiledetails = () =>{
    const sessionid  = sessionStorage['loginstatus']
    const navigate  = useNavigate()
    const { state } = useLocation()
    const [user, setUser] = useState('')
    const loadUserDetails = () => {
        const { id } = state
        const url = `${URL}/user/${id}`
        axios.get(url).then((response) => {
          const result = response.data
          if (result['status'] == 'success') {
            setUser(result['data'])
          }
        })
    }

    useEffect(() => {
        loadUserDetails()
    }, [])
    
    return (
        <div>
            <div>
            {
                sessionid == 1 &&(
                    <div>
            {/* Navigation bar */}
            <Navigationbar />
            <br />
            <h4>My Profile</h4>
            <hr />

            <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">            
                    <a class="btn btn-primary active"   
                        id="v-pills-personal-tab" data-bs-toggle="pill" 
                        data-bs-target="#v-pills-personal" 
                        role="tab" 
                        aria-controls="v-pills-personal" 
                        aria-selected="true">
                            <i class="fas fa-user-alt fa-2x"></i> 
                    </a>
                    
                    <br />
                    <a class="btn btn-primary" 
                        id="v-pills-addrs-tab" data-bs-toggle="pill" 
                        data-bs-target="#v-pills-addrs" 
                        role="tab"  
                        aria-controls="v-pills-addrs" 
                        aria-selected="false">
                            <i class="fas fa-location-arrow fa-2x"></i> 
                    </a>
                    
                    <br />
                   
                    
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" 
                        id="v-pills-personal" role="tabpanel" 
                        aria-labelledby="v-pills-personal-tab">
                        <PersonalDetails user={user}/>
                        <br />
                        <div class="justify-content-md">
                            <a class="btn btn-lg"  
                                onClick={()=>{
                                    navigate('/updatePersonalDetails',{state: { user : user }})
                                }}>
                                <i class="fas fa-pen"></i>
                            </a>
                        </div> 
                    </div>
                    
                    <div class="tab-pane fade" 
                        id="v-pills-addrs" 
                        role="tabpanel" 
                        aria-labelledby="v-pills-addrs-tab">
                        <AddressDetails />
                        <br />
                        <div class="justify-content-md">
                            <a class="btn btn-lg"  
                                onClick={()=>{
                                    navigate('/updateAddressCodeDetails')
                                }}>
                                <i class="fas fa-pen"></i>
                            </a>
                        </div>                         
                    </div>
                    
                 
                </div>
            </div>
            </div>
                )
            }
            </div>
            <div>
            { sessionid !=1 &&( navigate('/home'))}
            </div>
        </div>
    )
}
    
export default Profiledetails