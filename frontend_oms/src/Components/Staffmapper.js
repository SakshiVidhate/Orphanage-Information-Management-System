import '../Pages/CSS/index.css'
import AddressDetails from './AddressDetails'
import { URL } from '../config'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'



const Staffmapper = (props) => {
    const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage 
    const navigate = useNavigate()
    const { staff } = props
    console.log(staff.id)

    const deleteStaff = () => {
        const url = `${URL}/staff/delete/${staff.id}`
        
        axios.delete(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                toast.success('Staff deleted successfully')
                window.location.reload(false)

            } else {
                toast.error('Staff deletion activity failed')
            }
        })
    }

    return (
        <div key={staff.id}>
        {/*<img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>*/}
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-8">
                    <div class="card" id='backdata0'>
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                           {/*  <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" class="img-fluid"/>*/}
                            <a href="#!">
                                <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <div className='row'>
                                <div className="col-8">
                                    <h6 class="card-title">{staff.staffName}</h6>
                                    <h6 class="card-title">{staff.jobDescription}</h6>
                                    <h6 class="card-title">{staff.salary}</h6>
                                    <h6 class="card-title">{staff.gender}</h6>
                                    <h6 class="card-title">{staff.dateOfJoining}</h6>
                    

                                    {
                                        roleId == 1 && (

                                            <div>
                                                

                                            <button class="btn btn-danger  btn-lg" type="button" onClick={deleteStaff} >Delete Staff</button>
                                            <button class="btn btn-secondary btn-lg" type="button" onClick={() => { 
                                                sessionStorage.setItem('updatestaffId',staff.id) 
                                                sessionStorage.setItem('updatestaffName',staff.staffName)  
                                                sessionStorage.setItem('updatestaffjobDescription',staff.jobDescription)  
                                                sessionStorage.setItem('updatestaffsalary',staff.salary)  
                                                sessionStorage.setItem('updatestaffgender',staff.gender)  
                                                sessionStorage.setItem('updatestaffdateOfJoining',staff.dateOfJoining)  
                                                navigate("/updateStaff") } } >Update Staff</button>
                                            </div>
                                            
                                        )
                                    }

                                 
                                </div >
                                
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <br />
        </div >
    )
}

export default Staffmapper