import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER, UPLOAD_MUTATION } from "../utils/mutations";
import { UPDATE_SKILLS, UPDATE_IMAGE } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_SKILLS, QUERY_IMAGE } from "../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from 'react-dropzone';
import { useLazyQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Auth from "../utils/auth";
import homeimage from "../assets/images/employeeproduct.jpg";


function Signup(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '', profileText:'' });
  const [addUser] = useMutation(ADD_USER);
  const [file, setFile] = useState({});

  
  const [uploadFile, {data: mutationData}] = useMutation(UPLOAD_MUTATION, {
    refetchQueries: [{query: QUERY_IMAGE}]
  });

  // const {  data:imageData } = useQuery(QUERY_IMAGE);
  // console.log("images uploaded", imageData);

  if(mutationData){
    console.log(mutationData.uploadFile.id);
  };
  

  const handleUpload = async (event) => {
    event.preventDefault();
    if (file) {
      console.log("filesssss", file)
      uploadFile({
        variables:  {file }
      });


      setFile({})
    };
  
    return file;
  };
  


  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFile => {
    setFile(
      Object.assign(acceptedFile[0], {
        preview: URL.createObjectURL(acceptedFile[0]),
      })
    );
    console.log("aacepted", acceptedFile);
    }
  });

  const thumbs = 
    <div className='thumb' key={file.name}>
      <div className='thumb-inner'>
        <img src={file.preview} className='img' alt={file.length && "img"} />
      </div>
    </div>

    useEffect(() => () => {
        URL.revokeObjectURL(file.preview)
    }, [file]);




  const { skills } = state;

  const { loading, data: skillData } = useQuery(QUERY_SKILLS);

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch()
    if (skillData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_SKILLS,
        skills: skillData.skills,
      });
      //   skillData.skills.forEach(skill => {
      //     idbPromise('skills', 'put', skill);
      //   });
    }
    // else if (!loading) {
    //   idbPromise('skills', 'get').then(categories => {
    //     dispatch({
    //       type: UPDATE_SKILLS,
    //       categories: categories
    //     });
    //   });
    // }
  }, [skillData, loading, dispatch]);





  const handleFormSubmit = async event => {
    event.preventDefault();

    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName, 
        profileText: formState.profileText, skills: formState.skills, upload: mutationData.uploadFile.id
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const imageDisplayed = homeimage;
  const roleDisplayed = "H!red";

  return (
    <section style={{margin:0}}>
      <Header image={imageDisplayed} role={roleDisplayed}></Header>
    <div id="contact" className="paddsection">
      <div className="container">
        <div className="contact-block1">
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
              <form onSubmit={handleFormSubmit} className="php-email-form" encType="multipart/form-data">
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

                  <section className='container'>
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} />
                      <p>Drag 'n' drop some file here, or click to select file</p>
                    </div>
                    <aside className='thumb-container'>
                      {thumbs}
                      <button
                        type='submit'
                        className={`button`}
                        style={{ display: file && !Object.keys(file).length && 'none' }}
                        onClick={handleUpload}
                      >
                        Upload
                      </button>
                    </aside>
                  </section>
                  {/* 
                  <div className="col-lg-12" style={{ paddingBottom: 20 }}>
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
                  </div> */}

                  <div className="col-lg-12" style={{ paddingBottom: 20 }}>
                    {skills.map((skill) => (
                      <div key={skill._id} className="form-check">
                        <input
                          type="checkbox"
                          name="skills"
                          className="form-check-input"
                          value={skill._id}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">{skill.name}</label>
                      </div>
                    ))}
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="profileText"
                        rows="20"
                        id="profileText"
                        placeholder="Please tell us about yourself and your job experience. Include as much detail as you can."
                        onChange={handleChange}
                      ></textarea>
                      <div className="validate"></div>
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
    </section>
  );
}

export default Signup;
