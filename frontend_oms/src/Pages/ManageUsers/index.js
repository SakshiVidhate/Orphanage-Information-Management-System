import '../CSS/index.css'
import Navigationbar from '../../Components/Naviagationbar'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { URL } from '../../config'
import axios from 'axios'
import Userdata from '../../Components/Userdata'

const ManageUsers = () =>{
    const [ users, setUsers ] = useState([])
    const getAllUsers =() =>{
        const url =`${URL}/user/all`
        axios.get(url).then((response)=>{
            const result = response.data
            if(result['status'] == 'success')
            {
                setUsers(result['data'])
            }else{
                toast.error('Something wend wrong')
            }
        })

    }
    useEffect (()=>{
        getAllUsers()
    },[])
    return (
        
        <div>
          
            {/* Navigation bar */}
            <Navigationbar />
            <br />
            <div>
               {    users.map((user)=>{
                    return <div><span>
                        <Userdata user={user}/>
                    </span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ManageUsers