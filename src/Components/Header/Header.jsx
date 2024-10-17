import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

export default function Header() {

    return<>
    
    <header className="masthead">
                    <div className="container position-relative">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="text-center text-white">
                                    <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
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
                                                <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">
                                                    Email Address is required.
                                                </div>
                                                <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">
                                                    Email Address Email is not valid.
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <button id="submitButton" className="btn btn-primary btn-lg disabled" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                        <div id="submitSuccessMessage" className="d-none">
                                            <div className="text-center mb-3">
                                                <div className="fw-bolder">Form submission successful!</div>
                                                <p>To activate this form, sign up at <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a></p>
                                            </div>
                                        </div>
                                        <div id="submitErrorMessage" className="d-none text-danger mb-3">Error sending message!</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
    </>
    }


