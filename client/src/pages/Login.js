import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
  // const [formState, setFormState] = useState({ email: '', password: '' })
  // const [login, { error }] = useMutation(LOGIN);

  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const {data} = await login({ variables: { ...formState } });
      const token = data.login.token;
      console.log(data);
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  

  return (
    <div id="contact" className="paddsection">
      <div className="container">
        <div className="contact-block1">
          <div className="row">

            <div className="col-lg-6">
              <div className="contact-contact">

                <h2 className="mb-30">Login</h2>

                <ul className="contact-details">
                  <li><span>.....</span></li>
                  <li><span>.....</span></li>
                  <li><span>.....</span></li>
                  <li><span>.....</span></li>
                </ul>

              </div>
            </div>

            <div className="col-lg-6">
              <form onSubmit={handleFormSubmit} className="php-email-form">
                <div className="row">

                  <div className="col-lg-6">
                    <div className="form-group contact-block1">
                      <input type="email" name="email" className="form-control" id="email" placeholder="email" onChange={handleChange} />
                      <div className="validate"></div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="password" className="form-control" name="password" id="pwd" placeholder="Password" onChange={handleChange} />
                      <div className="validate"></div>
                    </div>
                  </div>


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
