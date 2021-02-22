import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import { UPDATE_SKILLS, UPDATE_CURRENT_SKILL } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_SKILLS } from "../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function Signup() {
  // const [formState, setFormState] = useState({ email: '', password: '' })
  // const [Signup, { error }] = useMutation(Signup);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { skills } = state;

  const { loading, data: skillData } = useQuery(QUERY_SKILLS);
  console.log(skillData);
  console.log(skills);

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (skillData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_SKILLS,
        skills: skillData.skills,
      });

      console.log("Skill clicked", skillData);
      //   skillData.skills.forEach(skill => {
      //     idbPromise('categories', 'put', skill);
      //   });
    }
    // else if (!loading) {
    //   idbPromise('categories', 'get').then(categories => {
    //     dispatch({
    //       type: UPDATE_CATEGORIES,
    //       categories: categories
    //     });
    //   });
    // }
  }, [skillData, loading, dispatch]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("loggedin");
  };

  const handleChange = (event) => {
    console.log("loggedin");
  };

  return (
    <div id="contact" className="paddsection">
      <div className="container">
        <div class="contact-block1">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-contact">
                <h2 className="mb-30">Signup</h2>

                <ul className="contact-details">
                  <li>
                    <span>.....</span>
                  </li>
                  <li>
                    <span>.....</span>
                  </li>
                  <li>
                    <span>.....</span>
                  </li>
                  <li>
                    <span>.....</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <form onSubmit={handleFormSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group contact-block1">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        id="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                      />
                      <div className="validate"></div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group contact-block1">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        id="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                      />
                      <div className="validate"></div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group contact-block1">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="email"
                        onChange={handleChange}
                      />
                      <div className="validate"></div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="pwd"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <div className="validate"></div>
                    </div>
                  </div>

                  <div className="col-lg-12" style={{paddingBottom: 20}}>
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          name="profileImage"
                          id="profileImage"
                          placeholder="Please upload a profile Picture"
                        />
                        <label class="custom-file-label">Choose file</label>
                        <div className="validate"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12" style={{ paddingBottom: 20 }}>
                    {skills.map((skill) => (
                      <div className="form-check contact-block1">
                        <input
                          key={skill._id}
                          type="checkbox"
                          name="skills"
                          className="form-check-input"
                          id="firstName"
                          placeholder="First Name"
                          value={skill.name}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">{skill.name}</label>
                      </div>
                    ))}
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        name="profileText"
                        rows="20"
                        placeholder="Please tell us about yourself and your job experience. Include as much detail as you can."
                      ></textarea>
                      <div class="validate"></div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <input
                      type="submit"
                      className="btn btn-defeault btn-send"
                      value="Signup"
                    />
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

export default Signup;
