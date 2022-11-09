import './style.css'

import { Logo } from '../../components/logo'

export default function Login(){
    return(
        <div className='login-container'>
            <Logo />
            <form className='form'>
                <input 
                    type="email"
                    placeholder='Digite seu email'
                />
                <input 
                    type='password'
                    placeholder='************'
                    autoComplete='on'
                />
            </form>
        </div>
    )
}