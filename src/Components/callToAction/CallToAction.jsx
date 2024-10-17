import 'bootstrap/dist/css/bootstrap.min.css';
import './CallToAction.css';
import EmailInput from '../EmailInput';

export default function CallToAction( ) {
    return (
        <section id="signup" className="call-to-action text-white text-center">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                        {/* Signup form */}
                        <EmailInput/>

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