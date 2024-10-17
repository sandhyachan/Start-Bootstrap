import 'bootstrap/dist/css/bootstrap.min.css';
import './CallToAction.css';

export default function CallToAction( ) {
    return (
        <section id="signup" className="call-to-action text-white text-center">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                        {/* Signup form */}
                        <form id="contactFormFooter" className="form-subscribe" data-sb-form-api-token="API_TOKEN">
                            {/* Email address input */}
                            <div className="row">
                                <div className="col">
                                    <input 
                                        id="emailAddressBelow" 
                                        type="email" 
                                        className="form-control form-control-lg" 
                                        placeholder="Email Address" 
                                        required 
                                    />
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">
                                        Email Address is required.
                                    </div>
                                    <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">
                                        Email Address is not valid.
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button id="submitButton" type="submit" className="btn btn-primary btn-lg disabled">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Submit success message */}
                        <div id="submitSuccessMessage" className="d-none">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                <p>
                                    To activate this form, sign up at 
                                    <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">
                                        https://startbootstrap.com/solution/contact-forms
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Submit error message */}
                        <div id="submitErrorMessage" className="d-none text-danger mb-3">
                            Error sending message!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};