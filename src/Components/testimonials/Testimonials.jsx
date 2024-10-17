import 'bootstrap/dist/css/bootstrap.min.css';
import '../testimonials/Testimonials.css';

export default function Testimonials() {
    return (
        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img 
                                src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-landing-page/refs/heads/master/src/assets/img/testimonials-1.jpg" 
                                alt="Margaret E." 
                                className="img-fluid rounded-circle mb-3" 
                            />
                            <h5>Margaret E.</h5>
                            <p className="font-weight-light mb-0">
                            &quot;This is fantastic! Thanks so much guys!&quot;
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img 
                                src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-landing-page/refs/heads/master/src/assets/img/testimonials-2.jpg" 
                                alt="Fred S." 
                                className="img-fluid rounded-circle mb-3" 
                            />
                            <h5>Fred S.</h5>
                            <p className="font-weight-light mb-0">
                            &quot;Bootstrap is amazing. I&apos;ve been using it to create lots of super nice landing pages.&quot;
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img 
                                src="https://raw.githubusercontent.com/StartBootstrap/startbootstrap-landing-page/refs/heads/master/src/assets/img/testimonials-3.jpg" 
                                alt="Sarah W." 
                                className="img-fluid rounded-circle mb-3" 
                            />
                            <h5>Sarah W.</h5>
                            <p className="font-weight-light mb-0">
                            &quot;Thanks so much for making these free resources available to us!&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
