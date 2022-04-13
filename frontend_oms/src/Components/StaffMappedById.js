import '../Pages/CSS/index.css'
import axios from 'axios'
import { URL } from '../config'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'

const StaffMappedById =(props)=>{
    const {id} = props
    const [activityData,setActivityData]=useState([])
console.log(id)
    const getStaffData =()=>{
        const url = `${URL}/staff/details/${id}`
        axios.get(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                setActivityData(result['data'])
            }else{
                toast.error('Staff not found')
            }
        })
    }
    useEffect(()=>{
        getStaffData()
    },[])
    
return(
    <div key ={activityData.id}>
        <h9 class="card-title">{activityData.staffName}</h9>
    </div>
    )
}

export default StaffMappedById