import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../images/logo_E_Dark.jpg'

const Navigationbar = () =>{
    const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage
    const navigate  = useNavigate()
    const logoutUser = ()=>{
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('firstName')
        sessionStorage.removeItem('lastName')
        sessionStorage.removeItem('roleId')
        sessionStorage.removeItem('addressId')
        sessionStorage['loginstatus'] = 0
        sessionStorage.removeItem('loginStatus')
        navigate('/signin')
        toast.info('Logged out successfully')
        
    }
    return(
        <div>
            
            {/* Navigation bar */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <a class="navbar-brand mt-2 mt-lg-0" href="/home">
                        <img
                        src={logo}
                        height="35"
                        alt="Event Logo"
                        loading="lazy"
                        />
                    </a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/orphans">Our Childern</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/adoptions">Adoption</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/staff">Staff Members</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/aboutus">About Us</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/contactus">Contact Us</a>
                        </li>
                    </ul>
                </div>
                {loginstatus!=1 &&(<div class="d-flex align-items-center">
                    <a class="text-reset me-3 " href="/signin">
                        <i class="fas fa-sign-in-alt text-white fa-lg"></i>
                    </a>
                    <a class="text-reset me-3 " href="/signup">
                        <i class="fas fa-user-plus text-white fa-lg"></i>
                    </a>
                </div>)}
                {loginstatus==1 &&(<div class="btn-group mb-2">
                    <button
                        type="button"
                        class="btn btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                            <i class="fas fa-user-alt fa-lg"></i>
                            {" "+firstName}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item"> Hello {firstName} </a></li>
                        <li><button class="dropdown-item" onClick={() => {navigate('/profiledetails', { state: { id: id } })}}>Profile</button></li>
                        <li><button class="dropdown-item" onClick={() => {navigate('/changeUserPassword', { state: { id: id } })}}>Change Password</button></li>
                       
                     
                        <li><button class="dropdown-item" onClick={logoutUser}>Signout</button></li>
                    </ul>
                </div>)}
            </div>
            </nav>

        </div>       
    )
}
export default Navigationbar