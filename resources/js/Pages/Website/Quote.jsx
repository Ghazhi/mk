import { Link } from "@inertiajs/inertia-react";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";

export default function Quote() {
    return (
        <div>
            <Nav />
            {/* Page Header Start */}
            <div
                className="container-fluid page-header page-header-quote py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center mt-5 py-5">
                    <h1 className="display-3 text-white mt-5 animated slideInDown">
                        Quote
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link href="/">Home</Link>
                            </li>
                            {/*  */}
                            <li className="breadcrumb-item active" aria-current="page">
                                Quote
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Quote Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        {/* <p className="fs-5 fw-bold text-primary"> Quote</p> */}
                        <h1 className="display-5 mb-5 text-primary">Get A Quote</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div
                                className="bg-light rounded p-4 p-sm-5 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                id="gname"
                                                placeholder="Gurdian Name"
                                            />
                                            <label htmlFor="gname">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control border-0"
                                                id="gmail"
                                                placeholder="Gurdian Email"
                                            />
                                            <label htmlFor="gmail">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                id="cname"
                                                placeholder="Child Name"
                                            />
                                            <label htmlFor="cname">Your Mobile</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">

                                            <select className="form-control border-0 bg-white" name="" id="">
                                                <option value=""></option>
                                                <option value="">Large Format Printing</option>
                                                <option value="">Industrial & Commercial Print</option>
                                                <option value="">Graphic Design</option>
                                                <option value="">Colour Separation</option>
                                                <option value="">Offset Press</option>
                                                <option value="">Security Printing</option>
                                            </select>
                                            <label htmlFor="cage">Service Type</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control border-0"
                                                placeholder="Leave a message here"
                                                id="message"
                                                style={{ height: 100 }}
                                                defaultValue={""}
                                            />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn btn-primary py-3 px-4" type="submit">
                                            Submit Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quote End */}
            <Footer />

        </div>
    )
}
