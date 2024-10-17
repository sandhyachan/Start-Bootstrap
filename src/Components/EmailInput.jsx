import 'bootstrap/dist/css/bootstrap.min.css';

// EmailInput component for capturing user email addresses
export default function EmailInput(){
    return<>
    <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div className="row">
            <div className="col">
                <input
                    id="emailAddress"
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email Address"
                    required
                />

                {/* Feedback for when the email address is required */}
                <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">
                    Email Address is required.
                </div>

                {/* Feedback for when the email address is invalid */}
                <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">
                    Email Address Email is not valid.
                </div>
            </div>

            {/* Submit button for the form */}
            <div className="col-auto">
                <button id="submitButton" className="btn btn-primary btn-lg disabled" type="submit">
                    Submit
                </button>
            </div>
        </div>

         {/* Success message displayed upon successful form submission */}
        <div id="submitSuccessMessage" className="d-none">
            <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                <p>To activate this form, sign up at <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a></p>
            </div>
        </div>

        {/* Error message displayed when submission fails */}
        <div id="submitErrorMessage" className="d-none text-danger mb-3">Error sending message!</div>
    </form>


    </>
}
