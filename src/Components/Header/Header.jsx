import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import EmailInput from '../EmailInput';

// Header component to display the landing page's main message and email input
export default function Header() {

    return<>
    
    <header className="masthead">
        <div className="container position-relative">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="text-center text-white">
                        <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                        {/* Email input component for users to enter their email */}
                        <EmailInput/>
                    </div>
                </div>
            </div>
        </div>
    </header>
</>
}


