import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar( ){
    return <>
    <div>
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container-fluid">
               <a className="navbar-brand" href="#!">
                Start Bootstrap
               </a>
               <a className="btn btn-primary" href="#signup">
                Sign Up
                </a>
            </div>
        </nav>
    </div>
    </>
}