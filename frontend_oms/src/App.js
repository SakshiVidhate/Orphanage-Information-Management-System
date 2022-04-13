import Home from "./Pages/Home";
import Signin from "./Pages/Signin"; 
import Signup from "./Pages/Signup";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import ManageUsers from "./Pages/ManageUsers";
import Profiledetails from "./Pages/Profiledetails";
import ChangeUserPassword from "./Pages/ChanegPassword";
import ChangeUserPasswordByEmail from "./Pages/ChangePasswordByEmail";
import UpdatePersonalDetails from "./Pages/UpdatePersonalDetails";
import UpdateAddressCodeDetails from "./Pages/UpdateAddressCodeDetails";
import UpdateAddressDetails from "./Pages/UpdateAddressDetails";
import {ToastContainer} from 'react-toastify'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import AddOrphan  from "./Pages/AddOrphan";
import Orphans from "./Pages/Orphans";
import UpdateOrphan from "./Pages/UpdateOrphan";
import Staff from "./Pages/Staff";
import AddStaff from "./Pages/AddStaff";
import UpdateStaff from "./Pages/UpdateStaff";
import AddNewAdoption from "./Pages/AddNewAdoption";
import Adoptions from "./Pages/Adoptions";


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path ="/home" element={<Home />}/>
          <Route path ="/" element={<Home />}/>
          <Route path ="/signin" element = {<Signin />} />
          <Route path ="/signup" element = {<Signup />} />
          <Route path ="/aboutus" element = {<Aboutus />} />
          <Route path ="/contactus" element = {<Contactus />} />
          <Route path ="/orphans" element = {<Orphans />} />
          <Route path ="/staff" element = {<Staff />} />
          <Route path ="/profiledetails" element = {<Profiledetails />} />
          <Route path ="/changeUserPassword" element = {<ChangeUserPassword />} />
          <Route path ="/changeUserPasswordByEmail" element = {<ChangeUserPasswordByEmail />} />
          <Route path ="/updateOrphan" element={<UpdateOrphan />} />
          <Route path ="/manageUsers" element={<ManageUsers />} />
          <Route path ="/updatePersonalDetails" element={<UpdatePersonalDetails />} />
          <Route path ="/updateAddressCodeDetails" element={<UpdateAddressCodeDetails />} />
          <Route path ="/updateAddressDetails" element={<UpdateAddressDetails />} />
          <Route path ="/addOrphan" element={<AddOrphan />} />
          <Route path ="/updateStaff" element={<UpdateStaff />} />
          <Route path ="/addStaff" element={<AddStaff />} /> 
          <Route path ="/addNewAdoption" element={<AddNewAdoption />} /> 
          <Route path ="/adoptions" element = {<Adoptions />} />
         
        
       
        </Routes>
      </BrowserRouter>
      <ToastContainer theme='light' />
    </div>
  )
}

export default App;