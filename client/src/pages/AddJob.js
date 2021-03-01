import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Redirect, useParams } from 'react-router-dom';
import { ADD_JOB, UPLOAD_MUTATION } from "../utils/mutations";
import { UPDATE_SKILLS} from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_SKILLS, QUERY_IMAGE } from "../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from 'react-dropzone';
import Header from '../components/Header';
import Auth from "../utils/auth";
import homeimage from "../assets/images/employeeproduct.jpg";


function AddJob(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [formState, setFormState] = useState({ email: '', role: '', description: '', skills: '' });
    const [addJob] = useMutation(ADD_JOB);
    const [file, setFile] = useState({});
  
    
    const [uploadFile, {data: mutationData}] = useMutation(UPLOAD_MUTATION, {
      refetchQueries: [{query: QUERY_IMAGE}]
    });
  
  
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
          <img src={file.preview} alt={file.length && "img"} />
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
  
  
    // console.log(Auth.getProfile().data.email)

  
    const handleFormSubmit = async event => {
      event.preventDefault();
        try{
            await addJob({
                variables: {
                  email: formState.email, role: formState.role,
                  description: formState.description, skills: formState.skills, upload: mutationData.uploadFile.id
                }
              });
              
        }catch (e) {
            console.error(e);
        }
        window.location.assign('/')
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
                  <h2 className="mb-30">Post a New Role</h2>
  
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
                <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group contact-block1">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="email"
                          onChange={handleChange}
                        />
                    
                      </div>
                    </div>
  
                    <div className="col-lg-6">
                      <div className="form-group contact-block1">
                        <input
                          type="text"
                          name="role"
                          className="form-control"
                          id="role"
                          placeholder="Role"
                          onChange={handleChange}
                        />
                        <div className="validate"></div>
                      </div>
                    </div>
  
  
                   
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
                          name="description"
                          rows="20"
                          id="description"
                          placeholder="Please give applicants as much detail about the role as possible"
                          onChange={handleChange}
                        ></textarea>
                        <div className="validate"></div>
                      </div>
                    </div>
  
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        className="btn btn-defeault btn-send"
                        value="Post Job"
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
  
  export default AddJob;
  