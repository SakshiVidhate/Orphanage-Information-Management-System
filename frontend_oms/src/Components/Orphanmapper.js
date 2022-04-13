import '../Pages/CSS/index.css'
import { URL } from '../config'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'



const OrphanMapper = (props) => {
    const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage 
    const navigate = useNavigate()
    const { orphan } = props
    console.log(orphan.id)

    const deleteOrphan = () => {
        const url = `${URL}/orphan/delete/${orphan.id}`
        
        axios.delete(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                toast.success('Orphan deleted successfully')
                window.location.reload(false)

            } else {
                toast.error('Orphan deletion activity failed')
            }
        })
    }

    return (
        <div key={orphan.id}>
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
                                    <h6 class="card-title">{orphan.orphanName}</h6>
                                    <h6 class="card-title">{orphan.gender}</h6>
                                    <h6 class="card-title">{orphan.birthDate}</h6>
                                    <h6 class="card-title">{orphan.age}</h6>
                                    <h6 class="card-title">{orphan.education}</h6>
                                    <h6 class="card-title">{orphan.health}</h6>
                                    <h6 class="card-title">{orphan.bloodGroup}</h6>

                                    {
                                        roleId == 1 && (

                                            <div>
                                                

                                            <button class="btn btn-danger  btn-lg" type="button" onClick={deleteOrphan} >Delete Orphan</button>
                                            <button class="btn btn-secondary btn-lg"  type="button" onClick={() => { 
                                                sessionStorage.setItem('updateorphanId',orphan.id) 
                                                sessionStorage.setItem('updateorphanName',orphan.orphanName)  
                                                sessionStorage.setItem('updateorphanGender',orphan.gender)  
                                                sessionStorage.setItem('updateorphanBirthDate',orphan.birthDate)  
                                                sessionStorage.setItem('updateorphanAge',orphan.age)  
                                                sessionStorage.setItem('updateorphanEducation',orphan.education)  
                                                sessionStorage.setItem('updateorphanHealth',orphan.health)  
                                                sessionStorage.setItem('updateorphanBloodGroup',orphan.bloodGroup)  
                                                navigate("/updateOrphan") }} >Update Orphan</button>
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

export default OrphanMapper