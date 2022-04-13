import '../CSS/index.css'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { URL } from '../../config'
import axios from 'axios'
import { toast } from 'react-toastify'
import Staffmapper from '../../Components/Staffmapper'

const Staff = () => {
    const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage 
    const [staff, setStaff] = useState([])
    
    console.log(roleId)
    const navigate = useNavigate()
    const loadStaff = () => {
        const url = `${URL}/staff/all`
        axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            
            
            setStaff(result['data'])
            
        })
    }



    useEffect(() => {
        loadStaff()
    }, [])


    return (
        <div>

            {/* Navigation bar */}

            <br />
            <h4>Our Staff Members ...</h4>

            <div>

                {
                    staff.map((staff) => {
                        return <Staffmapper staff={staff} />
                    })
                }

            </div>

            {
             roleId == 1 && (

             <div>
                                                

                   <button class="btn btn-primary btn-lg " type="button" onClick={() => { navigate('/addStaff') }} >Add Staff</button>
                                     
              </div>
                                            
                )
              }


          
           

        </div>
    )
}

export default Staff


