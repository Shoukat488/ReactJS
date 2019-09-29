import React from 'react' ;
import { conditionalExpression } from '@babel/types';

function Login()
{
    function match()
    {
        const username = document.getElementById('username').value;
        const passowrd = document.getElementById('password').value;
        console.log(username,passowrd)
        if(username === "shoukat" && passowrd === "pass123")
        {
            console.log("Successfull");
        }
    }
    
    

    return (

        <div className="Login">
            Username: <input type="text" id = "username"/>
            <br/>
            Password: <input type="password" id = "password"/>
            <br/>
            <button id="submit" onClick={ match }>Login</button>
        </div>
    )
}

export default Login;