import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

export default function Header() {

    return<>
    <header className='masthead'>
<div className='container position-relative'>
    <div className='row justify-content-center'>
        <div className='col-xl-6'>
            <div className='text-center text-white'>
                <h1 className='mb-5'>Generate more leads with a professional landing page! </h1>
                <form className="row">
                    <div className="col">
                        <input 
                        type="email" className="form-control form-control-lg" id="emailAddress" placeholder="Email Address" required />
                    </div>
                    <div className="col">
                        <button id="submitButton" type="submit" className="btn btn-primary btn-lg disabled">Submit</button>
                    </div>
                  </form>
            </div>
        </div>

    </div>
</div>

</header>
    </>
    }


