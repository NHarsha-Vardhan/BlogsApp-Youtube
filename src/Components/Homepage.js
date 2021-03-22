import React from 'react'
import GoogleLogin from 'react-google-login'
// import "../Components/Homepage.css"
import {useSelector,useDispatch} from "react-redux";
import {selectSignedIn, setSignedIn,setUserData} from "../features/userSclice";

function Homepage() {
const isSignedIn = useSelector(selectSignedIn);
const dispatch= useDispatch();
 const login = (response)=>{
     console.log(response);
     dispatch(setSignedIn(true));
     dispatch(setUserData(response.profileObj));
 }
 
    return (
        <div className="home__page">
         {!isSignedIn ? ( 
         <div className="home">
         <div className="login__message">
            <h2>📗</h2>
            <h1>A Readers favourite place! </h1>
            <p>
             we provide high quality online resource for reading blogs. Just 
             sign up and start reading some quality blogs.
            </p>
            <GoogleLogin
              clientId="498455914142-44ci0dbkkq4dga78qhcfsnls3qbd1rua.apps.googleusercontent.com"
              render={(renderProps)=>(
                  <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="login__button"
                  >
                  Login with Google
                 </button> 
              )}
              onSuccess={login}
              onFailure={login}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}   
            />
         </div>   
        </div>) :( "" 
        )}
        </div>
    )
}

export default Homepage;
