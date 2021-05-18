import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import './Login.css'


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();
        

        auth
        .signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        })
        .catch(err => alert(err))
    };

    const register = () => {
        if(!name){
            return alert('Please enter full name!')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user
            .updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
            
        })
        .catch(err => alert(err.message))
    };


    return (

        <div className="login">
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt="" />
            
            <form>
                <input
                    onChange={e  => setName(e.target.value)}
                    value={name} 
                    type="text"
                    placeholder="Fullname (required if registering)"
                />
                <input
                    onChange={e => setProfilePic(e.target.value)}
                    value={profilePic} 
                    type="text"
                    placeholder="Profle Pic URL (optional)"
                />
                <input 
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password} 
                    type="password"
                    placeholder="Password"
                />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>

            

        </div>
    )
}

export default Login
