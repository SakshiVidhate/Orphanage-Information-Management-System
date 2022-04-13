const RoleData = (props) =>{
    const { userRoleId } = props
   if(userRoleId === 3){
        return(
            <div>
               Parent
            </div>
   )}else if(userRoleId === 2){
    return(
        <div>
            Parent
        </div>
    )}else{
        return(
            <div>
                Admin
            </div>
        )}

}
export default RoleData