import React from 'react';
import { stringify } from 'querystring';

function Signup()
{
    function submit()
    {
        const name = document.getElementById("name").value;
        const fatherName = document.getElementById("fatherName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const obj = {
            name , fatherName, password, email
        }

        localStorage.setItem(JSON.stringify(obj), name);

        document.getElementById("message").innerText = "Thank for sign up";

    }
    return (
        <div className="Signup">
           Name: <input type="text" id="name" />
           Father name: <input type="text" id='fatherName'/>
           Email: <input id="email" type ="email" />
           Password : <input type = "password" id="password" />
           <button type="button" onClick={submit}></button>
           <span id = "message"></span>
        </div>
    );
}

export default Signup;