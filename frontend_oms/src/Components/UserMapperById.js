import '../Pages/CSS/index.css'
import axios from 'axios'
import { URL } from '../config'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'

const UserMapperById =(props)=>{
    const {id} = props
    const [activityData,setActivityData]=useState([])
console.log(id)
    const getUserData =()=>{
        const url = `${URL}/user/${id}`
        axios.get(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                setActivityData(result['data'])
            }else{
                toast.error('Event not found')
            }
        })
    }
    useEffect(()=>{
        getUserData()
    },[])
    
return(
    <div key ={activityData.id}>
        <p><h9 class="card-title">{activityData.firstName}</h9>&nbsp; 
        <h9 class="card-title">{activityData.lastName}</h9></p>
    </div>
    )
}

export default UserMapperById