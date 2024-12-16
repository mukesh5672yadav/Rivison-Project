import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import './index.css';



const Custlogin = () => {

    
    const [m,setm]=useState();
    const [p,setp]=useState();
    const [cpass,setcpass]=useState();


    const email=(e)=>{
        setm(e.target.value);
    }
    const password=(e)=>{
        setp(e.target.value);
    }
    const confirmpassword=(e)=>{
        setcpass(e.target.value);
    }
    
    const saverecord=async()=>{
        const mobile=/^\d{10}$/;

        if(m===""){
            alert("Please Enter Mobile");
        }
        else if(!m.match(mobile)){
            alert("Please Enter valid Mobile");
        }
        else if(p===""){
            alert("Please Enter password");
        }
        else if(cpass!==p){
            alert("Enter Correct Confirm Password");
        }
        
        else{
            const re=await fetch("https://rivison-project-backend.onrender.com/signup",{
                method:"POST",
                headers:{"Content-Type":"Application/json"},
                body:JSON.stringify({mob:m, psw:p})
            });
            const data=await re.json();
            alert(data.msg);
        }
    }


//code for Login

const [mo,setmo]=useState();
    const [pa,setpa]=useState();
    const jump=useNavigate();


    const [cookie,setcookie,removecookies]=useCookies();
   


    const fun1=(e)=>{
        setmo(e.target.value);
    }
    const fun2=(e)=>{
        setpa(e.target.value);
    }

    const save=async()=>{
        if(m===""){
            alert("Please Enter Mobile");
        }
        else if(p===""){
            alert("Please Enter Password");
        }
        else{
            const re=await fetch("https://rivison-project-backend.onrender.com/login",{
                method:"POST",
                headers:{"Content-Type":"Application/json"},
                body:JSON.stringify({mob:mo, psw:pa}),
                credentials:"include"
            });
            const data=await re.json();
            if(data.msg==="Valid User")
            {
                setcookie("mycookie1",m);
                jump("/page");
            }
            else{
                alert("Invalid User");
            }
        }
    }


   
    return (

        <>
        <center className="mt-4">
            <div class="login-light"></div>
            <div class="login-box">
                <form action="#">
                    <input type="checkbox" class="input-check" id="input-check" />
                    <label for="input-check" class="toggle">
                        <span class="text off">off</span>
                        <span class="text on">on</span>
                    </label>
                    <div class="light"></div>

                    <h2>Login</h2>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input onChange={fun1} type="number" required />
                        <label>Mobile</label>
                        <div  class="input-line"></div>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input onChange={fun2} type="password" required></input>
                        <label>Password</label>
                        <div  class="input-line"></div>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button onClick={save} type="submit">Login</button>
                    <div class="register-link">
                        <p>Don't have an account? <a href="#" data-bs-toggle="modal" data-bs-target="#myModal" >Register</a></p>
                    </div>

                </form >
            </div >
        </center>

            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">


                        <div class="modal-header">
                            <h4 class="modal-title">SignUp</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>


                        <div class="modal-body">
                            <div className="form-group">
                                
                                <span>Mobile No.</span>
                                <input type="number" onChange={email} required className="form-control"></input>

                                <span>Password</span>
                                <input type="password" onChange={password} required className="form-control"></input>

                                <span>Confirm Password</span>
                                <input type="password" onChange={confirmpassword} required className="form-control"></input>
                            </div>

                        </div>


                        <div class="modal-footer">
                            <button onClick={saverecord} className="btn btn-info">Save</button>

                        </div>

                    </div>
                </div>
            </div>





        </>
    )

}

export default Custlogin