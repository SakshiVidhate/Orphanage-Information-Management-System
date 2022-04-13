import '../CSS/index.css'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { URL } from '../../config'
import axios from 'axios'
import Orphanmapper from '../../Components/Orphanmapper'


const Orphans = () => {
    const { id, firstName, lastName, roleId, addressId, loginstatus} =sessionStorage 
    const [orphan, setOrphan] = useState([])
    const navigate = useNavigate()
    const loadOrphans = () => {
        const url = `${URL}/orphan/all`
        axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            
            
                setOrphan(result['data'])
            
        })
    }



    useEffect(() => {
        loadOrphans()
    }, [])


    return (
        <div>

            {/* Navigation bar */}

            <br />
            <h4>Our Children ...</h4>

            <div>

                {
                    orphan.map((orphan) => {
                        return <Orphanmapper orphan={orphan} />
                    })
                }

            </div>
            {
             roleId == 1 && (

            <div>
                <button class="btn btn-primary btn-lg " type="button" onClick={() => { navigate('/addOrphan') }} >Add orphan</button>
            </div>
             )}
        </div>
    )
}

export default Orphans


