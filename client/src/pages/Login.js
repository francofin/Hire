import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async event => {
      event.preventDefault();
      try {
        const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e)
      }
    };
  
    const handleChange = event => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value
      });
    };
  
    return (
        <div id="contact" className="paddsection">
        <div class="container">
          <div class="contact-block1">
            <div class="row">
  
              <div class="col-lg-6">
                <div class="contact-contact">
  
                  <h2 class="mb-30">Login</h2>
  
                  <ul class="contact-details">
                    <li><span>.....</span></li>
                    <li><span>.....</span></li>
                    <li><span>.....</span></li>
                    <li><span>.....</span></li>
                  </ul>
  
                </div>
              </div>

              <div class="col-lg-6">
              <form  onSubmit={handleFormSubmit} class="php-email-form">
                <div class="row">

                  <div class="col-lg-6">
                    <div class="form-group contact-block1">
                      <input type="email" name="email" className="form-control" id="email" placeholder="email"  onChange={handleChange}/>
                      <div className="validate"></div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="password" className="form-control" name="password" id="pwd" placeholder="Password" onChange={handleChange}/>
                      <div className="validate"></div>
                    </div>
                  </div>
                  {
                    error ? <div>
                    <p className="error-text" >The provided credentials are incorrect</p>
                    </div> : null
                    }

                  <div className="col-lg-12">
                    <input type="submit" className="btn btn-defeault btn-send" value="Login" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  
  export default Login;
