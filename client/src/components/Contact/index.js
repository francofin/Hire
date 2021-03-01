import React, { useEffect, useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '', website: '' });
    const [errorMessage, setErrorMessage] = useState();
    const { name, email, message, website } = formState;
    // Can also use formState.name for eg

    const handleChange = function (event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('tHiS NeEdS tO Be A vAlId 3Ma1l PlEa3e Or I wIlL FiNd YoU I 8 lOc0');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value })
        }
    }
    console.log(formState)

    const handleSubmit = function (event) {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <form id="comment-form" method="post" action="" role="form">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input id="form_name" type="text" name="name" className="form-control" placeholder="Name *" required="required" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input id="form_email" type="email" name="email" className="form-control" placeholder="email *" required="required" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <input id="form_name" type="text" name="website" className="form-control" placeholder="Website" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <textarea id="form_message" name="message" className="form-control" placeholder="Message *" style={{Height: 200}} required="required"></textarea>
            </div>
          </div>
          <div className="col-lg-12">
            <input type="submit" className="btn btn-defeault btn-send" value="Send message" />
          </div>
        </div>
      </form>
    )

}

export default ContactForm;