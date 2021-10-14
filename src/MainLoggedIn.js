import React from "react";


function MainLoggedIn({setIsLoggedIn, loggedInUser}){


    return(
        <>
            {loggedInUser}
            <div onClick={()=>{localStorage.removeItem("loggedInUser");setIsLoggedIn(false);}}>Log out</div>


            
        </>
    )


}




export default MainLoggedIn;