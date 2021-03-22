import React,{useState} from 'react'
import { GoogleLogout } from 'react-google-login'
import { useSelector,useDispatch } from 'react-redux'
import {Avatar} from "@material-ui/core"
import { selectSignedIn,selectUserData, setSignedIn, setUserData, setInput} from '../features/userSclice'
import  "../Components/Navbar.css";
function Navbar() {
 const [inputValue, setInputValue] = useState("tech")    
 const isSignedIn = useSelector(selectSignedIn)
 const userData = useSelector(selectUserData);
 const dispatch = useDispatch()
 const logout = (response) =>{
     console.log(response)
     dispatch(setSignedIn(false));
     dispatch(setUserData(null));
 }
 const handleClick = (e) => {
     e.preventDefault();
     dispatch(setInput(inputValue));
 };
    return (
        <div className="navbar">
         <h1 className="navbar__header">BlogMania </h1>
            {isSignedIn && (
                <div className="blog__search">
                 <input 
                 className="search"
                 placeholder="search for a blog"
                 value={inputValue}
                 onChange={(e)=> setInputValue(e.target.value)}
                 />
                 <button className="submit" onClick={handleClick}>
                  Search
                 </button>
                </div>
            )}
            {
               isSignedIn ? (
                   <div className="navbar__user__data">
                    <Avatar 
                    className="user"
                    src={userData?.imageUrl} 
                    alt={userData?.name}
                    />
                    <h1 className="signedIn">{userData?.givenName}</h1>
                    <GoogleLogout
                    clientId="498455914142-44ci0dbkkq4dga78qhcfsnls3qbd1rua.apps.googleusercontent.com"
                    render={(renderProps)=>(
                    <button
                    onClick={renderProps.onClick}
                     disabled={renderProps.disabled}
                     className="logout__button"
                    >
                     Logout
                    </button> 
                )}
                  onLogoutSuccess={logout}
                 />
                 </div>
               ) : (
                   <h1 className="notSignedIn"> User not availble</h1>
               )
            }
        </div>
    );
};

export default Navbar
