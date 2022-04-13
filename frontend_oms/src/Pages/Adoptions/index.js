import '../CSS/index.css'
import { URL } from '../../config'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Adoptionmapper from '../../Components/Adoptionmapper'
import adoption from '../../images/adoption.jpg'


const Adoptions = () =>{
    const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage 
    const [adoptions, setAdoptions] = useState([])
    const navigate  = useNavigate()
    
    const loadAdoptions =()=>{
        const url = `${URL}/adoption/all/`
        axios.get(url).then((response)=>{
            const result = response.data
            console.log(result)
            if(result['status'] == 'success')
            {
                setAdoptions(result['data'])
            }else{
                toast.error('Something went wrong')
            }
        })
    }
    
    


    useEffect(()=>{
        loadAdoptions()
    },[])

  
    const toAddNewAdoption=()=>{
        navigate('/addNewAdoption')
    }

return (
    
    <div>
    <br />
       <div> 
            {adoptions.map((adoption)=>{
            return <div><span>
                <Adoptionmapper adoption={adoption}/>
            </span>
            </div>
            })
            }
        </div>
        <div className="row">
            <div>
            {roleId==1 &&(
            <button className="btn btn-primary btn-lg" onClick={toAddNewAdoption}>Add New Adoption</button>
            )}
            
            
            </div>
        </div>
    </div>
)
}

export default Adoptions