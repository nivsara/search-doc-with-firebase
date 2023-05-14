import './Login.scss';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

function Login() {

    const [userCred, setLoginCreds] = useState({email: '', password: ''});

    const onSignIn = async (event: any) => {
        event?.preventDefault();
        await createUserWithEmailAndPassword( auth, userCred.email, userCred.password);
    }

    const onInputChange = (event: any) => {
        setLoginCreds((prevState: any) => {
            if(event.target.id === 'email') {
                return ({
                    ...userCred,
                    email: event.target.value
                })
            } else {
                return ({
                    ...userCred,
                    password: event.target.value
                })
            }
        });
    }

    return <div className='login-wrapper'>
        <div className='login-info-text'>
            <p className='login-text'>Sign in to Search your Docs!</p>
        </div>
        <form className='login-form'>
            <div className='username-wrapper'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="text" id="email" name="email" className='form-control' onChange={onInputChange}/>
            </div>
            <div className='password-wrapper'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" id="password" name="password" className='form-control' onChange={onInputChange}/>
            </div>
            <div className='button-wrapper'>
                <button type="submit" onClick={onSignIn} className='button-primary'>Sign In</button>
            </div>
        </form>
    </div>
}

export default Login;