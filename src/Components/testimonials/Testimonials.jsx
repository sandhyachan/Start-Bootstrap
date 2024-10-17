import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';
import { TestimonialsData } from './Testimonial_data';

// Testimonials component to display customer feedback
export default function Testimonials() {
    return (
    <section className="testimonials text-center bg-light">
        <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
                {/* Map through testimonial_data array to dynamically present each tests */}
                {TestimonialsData.map((data,index) => (
                    <div key={index} className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img 
                            src={data.image} 
                            alt={data.name} 
                            className="img-fluid rounded-circle mb-3" 
                        />
                        <h5>{data.name}</h5>
                        <p className="font-weight-light mb-0">
                    {data.feedback}
                        </p>
                    </div>
                </div>

                ))}
                
            </div>
        </div>
    </section>
    );
};
