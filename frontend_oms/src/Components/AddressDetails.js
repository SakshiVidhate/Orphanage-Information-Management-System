import { URL } from '../config'
import { useNavigate } from 'react-router'
import { useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const AddressDetails = (props) =>{
    const  addressId  = sessionStorage['addressId']
    const [ address, setAddress ] = useState([])
    const loadUserAddressDetails = () => {
        const id  = addressId
        const url = `${URL}/address/complete/${id}`
        axios.get(url).then((response) => {
          const result = response.data
          if (result['status'] == 'success') {
            setAddress(result['data'])
          }else{
            toast.error('Something went wrong')
        }
        })
    }
    
    useEffect(() => {
        loadUserAddressDetails()
      }, [])
  
    return(
            <div>
                {address &&     
                    <div key={addressId}>
                        <div class="container-m">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col-12">
                                    <div class="card rounded-3 text-black" id ="backdata1">
                                        <table class="table table-borderless">
                                             <tbody>
                                                <br />
                                                <h6 className="row justify-content-center">Locale Address</h6>
                                                <hr />
                                                <tr>
                                                    <th>Address Line 1</th>
                                                    <td>{address.addressLine1}</td>         
                                                </tr>
                                                <tr>
                                                    <th>Address Line 2</th>
                                                    <td>{address.addressLine2}</td>         
                                                </tr>
                                                <hr />
                                                <h6 className="row justify-content-center">Region Address</h6>
                                                <hr />
                                                <tr>
                                                    <th>Taluka</th>
                                                    <td>{address.taluka}</td>         
                                                </tr> 
                                                <tr>
                                                    <th>City</th>
                                                    <td>{address.city}</td>         
                                                </tr> 
                                                <tr>
                                                    <th>State</th>
                                                    <td>{address.rajya}</td>         
                                                </tr> 
                                                <tr>
                                                    <th>Country</th>
                                                    <td>{address.country}</td>         
                                                </tr> 
                                                <tr>
                                                    <th>Postal Code</th>
                                                    <td>{address.postalCode}</td>         
                                                </tr> 
                                                <tr>
                                                    <th>Address Line 2</th>
                                                    <td>{address.taluka}</td>         
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
export default AddressDetails