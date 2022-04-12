import React,{useState} from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

function ResetPassword({location}) {
    const [password,setPassword]=useState("")
    const [searchParams] = useSearchParams();
  


    const ResetPasswordHandler= async(e)=>{
        e.preventDefault();
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          try {
            const {data} = await axios.put(
              `/api/users/resetpassword/${searchParams.get("resetToken")}`,
              {password},config
    
            );
            alert("Password Changed  ") 
              }catch(error){
    alert("verify ")    
     }
    
    }
  return (
    <div class="app-content">

        <div class="u-s-p-y-60">

            <div class="section__content">
                <div class="container">
                    <div class="breadcrumb">
                        <div class="breadcrumb__wrap">
                            <ul class="breadcrumb__list">
                                <li class="has-separator">

                                    <a href="index.html">Home</a></li>
                                <li class="is-marked">

                                    <a href="lost-password.html">Reset</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="u-s-p-b-60">

            <div class="section__intro u-s-m-b-60">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section__text-wrap">
                                <h1 class="section__heading u-c-secondary">FORGOT PASSWORD?</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__content">
                <div class="container">
                    <div class="row row--center">
                        <div class="col-lg-6 col-md-8 u-s-m-b-30">
                            <div class="l-f-o">
                                <div class="l-f-o__pad-box">
                                    <h1 class="gl-h1">PASSWORD RESET</h1>

                                    <span class="gl-text u-s-m-b-30">Enter your new password.</span>
                                    <form onSubmit={ResetPasswordHandler} class="l-f-o__form">
                                        <div class="u-s-m-b-30">

                                            <label class="gl-label" for="reset-email">Password *</label>

                                            <input class="input-text input-text--primary-style" type="password" value={password} minLength='6' onChange={(e)=>setPassword(e.target.value)} id="reset-Password" placeholder="New Password"/></div>
                                        <div class="u-s-m-b-30">

                                            <button class="btn btn--e-transparent-brand-b-2" type="submit">SUBMIT</button></div>
                                        <div class="u-s-m-b-30">

                                            <a class="gl-link" href="signin.html">Back to Login</a></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ResetPassword