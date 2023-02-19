import{Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function registerUser(ev){
        ev.preventDefault();
        axios.get('http://localhost:4000/test');
    }

    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-32">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto " onSubmit={}>
                <input type="text" placeholder="your Name" 
                value={name} 
                onChange={ev => setName(ev.target.value)}/>
                <input type="email" placeholder={'your@email.com'} 
                value={email} 
                onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="password" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)}/>
                <button className="primary">Register</button>
                
            </form> 
            <div className="text-center py-2 text-gray-500">
                Alreaady have an account 
                <Link to={'/Login'} className="underine text-black"> Login</Link>
            </div>
            </div>
           
        </div>
    );
}