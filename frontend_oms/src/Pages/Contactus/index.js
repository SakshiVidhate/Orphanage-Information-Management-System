import '../CSS/index.css'
import Navigationbar from '../../Components/Naviagationbar'
import { toast } from 'react-toastify'
import { URL } from '../../config'
import { useState } from 'react'
import axios from 'axios'



const Contactus = () =>{
    const currentUserRole = sessionStorage['roleId']
    const[userName, setUserName] = useState('')
    const[userEmail, setUserEmail] = useState('')
    const[userContact, setUserContact] = useState('')
  

    return (
        <div>         
            {/* Navigation bar */}
            <Navigationbar />  
            
            <br />
            
         
                <div>
                <br/>
                <h4>How to reach..?</h4>
                <br />  
                <div class="mapouter">
                
                        <div class="gmap_canvas">
                            <iframe width="1500" height="300" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116561.92074722295!2d73.7391387669278!3d19.99612664998354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1645340660252!5m2!1sen!2sin" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                </div>  
                <br /> 
            </div>  

            <hr />
            

            <h3>Where to find us...</h3>
            <br />  
            <div className="row">
                <div className="col">
                    <div class="h-100 d-flex flex-column justify-content-center align-items-center">
                        <h4 class=" align-self-center text-darkgrey">Office Address</h4>
                        <h6 class=" text-darkgrey "><i class="fas fa-map-marker-alt fa-2x "></i></h6>
                        <p class=" text-darkgrey ">Pl. No. B10,Behind Regimental Plaza, Main Road, Nashik</p>
                        <p class=" text-darkgrey ">Pin Code 422206,Nashik Maharashtra</p>
                    
                    </div>
                </div>
                <div className="col">
                    <div class="h-100 d-flex flex-column justify-content-center align-items-center">
                            <h4 class=" align-self-center text-darkgrey">Contact</h4>
                            <h6 class=" text-darkgrey "><i class="fas fa-phone-square fa-2x "></i></h6>
                            <p class=" text-darkgrey ">+91 88888 88888 , +91 88054 88888</p>
                    </div>
                </div>
                <div className="col">
                    <div class="h-100 d-flex flex-column justify-content-center align-items-center">
                            <h4 class=" align-self-center text-darkgrey">Email</h4>
                            <h6 class=" text-darkgrey "><i class="fas fa-envelope fa-2x "></i></h6>
                            <p class=" text-darkgrey ">admin.orphanagemanager@gmail.com</p>
                    </div>
                </div>
            </div>
            
           
        </div>
    )
}


export default Contactus
