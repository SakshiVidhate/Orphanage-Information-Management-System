import '../Pages/CSS/index.css'
import axios from 'axios'
import { URL } from '../config'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'

const OrphanMappedById =(props)=>{
    const {id} = props
    const [activityData,setActivityData]=useState([])
console.log(id)
    const getOrphanData =()=>{
        const url = `${URL}/orphan/details/${id}`
        axios.get(url).then((response)=>{
            const result = response.data
            if(result['status']=='success'){
                setActivityData(result['data'])
            }else{
                toast.error('Orphan not found')
            }
        })
    }
    useEffect(()=>{
        getOrphanData()
    },[])
    
return(
    <div key ={activityData.id}>
        <h9 class="card-title">{activityData.orphanName}</h9>
    </div>
    )
}

export default OrphanMappedById