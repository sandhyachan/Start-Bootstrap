import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../icons/Icons.css';
import { IconsData } from './Icons_data';

export default function Icons() {
    return (
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">

                    {/* Map through Icons_Data to dynamically create icons which promotes reusability and reduces code duplication */}
                    {IconsData.map((data, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className={`bi-${data.icon} m-auto text-primary`}></i>
                                </div>
                                <h3>{data.title}</h3>
                                <p className="lead mb-0">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
