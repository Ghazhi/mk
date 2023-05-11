import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function Index() {
    return (
        <div>
            <Nav />
            <Banner />
            {/* Top Feature Start */}
            <div className="container-fluid top-feature py-5 pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 px-5"
                                style={{ minHeight: 160 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <i className="fa fa-times text-primary" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>No Hidden Cost</h4>
                                        <span className="text-black">Clita erat ipsum lorem sit sed stet duo justo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 px-5"
                                style={{ minHeight: 160 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <i className="fa fa-users text-primary" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>Dedicated Team</h4>
                                        <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 px-5"
                                style={{ minHeight: 160 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <i className="fa fa-phone text-primary" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>24/7 Available</h4>
                                        <span>Clita erat ipsum lorem sit sed stet duo justo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Feature End */}
            {/* Features Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="fs-5 fw-bold text-primary">Why Choose Us!</p>
                            <h1 className="display-5 mb-4">
                                Customer Relationship Management
                            </h1>
                            <p className="mb-4">
                                Mork Impression provides a dedicated and accountable Client Service
                                Person to ensure that your print needs are fully met.

                            </p>
                            <a className="btn btn-primary py-3 px-4" href="/about">
                                About Us
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-6">
                                    <div className="row g-4">
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                            <div
                                                className="text-center rounded py-5 px-4"
                                                style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                                            >
                                                <div
                                                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                                                    style={{ width: 90, height: 90 }}
                                                >
                                                    <img src="template/img/icon/check.png" alt="" />
                                                    {/* <i className="fa fa-check fa-3x text-primary" /> */}
                                                </div>
                                                <h4 className="mb-0">Uncomprimising Quality</h4>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                            <div
                                                className="text-center rounded py-5 px-4"
                                                style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                                            >
                                                <div
                                                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                                                    style={{ width: 90, height: 90 }}
                                                >
                                                    <img src="template/img/icon/time.png" alt="" />
                                                </div>
                                                <h4 className="mb-0">Timely deliveries</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                                    <div
                                        className="text-center rounded py-5 px-4"
                                        style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                                    >
                                        <div
                                            className="btn-square bg-light rounded-circle mx-auto mb-4"
                                            style={{ width: 90, height: 90 }}
                                        >
                                           <img src="template/img/icon/price.png" alt="" />
                                        </div>
                                        <h4 className="mb-0">Competitive Prices</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* Facts Start */}
            <div
                className="container-fluid facts my-5 py-5"
                data-parallax="scroll"
                data-image-src="template/img/bnna.jpeg"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div
                            className="col-sm-6 col-lg-3 text-center wow fadeIn"
                            data-wow-delay="0.1s"
                        >
                            <h1 className="display-4 text-white" data-toggle="counter-up">
                                1234
                            </h1>
                            <span className="fs-5 fw-semi-bold text-light">Our Clients</span>
                        </div>
                        <div
                            className="col-sm-6 col-lg-3 text-center wow fadeIn"
                            data-wow-delay="0.3s"
                        >
                            <h1 className="display-4 text-white" data-toggle="counter-up">
                                1234
                            </h1>
                            <span className="fs-5 fw-semi-bold text-light">Completed Prints</span>
                        </div>
                        <div
                            className="col-sm-6 col-lg-3 text-center wow fadeIn"
                            data-wow-delay="0.5s"
                        >
                            <h1 className="display-4 text-white" data-toggle="counter-up">
                                1234
                            </h1>
                            <span className="fs-5 fw-semi-bold text-light">Dedicated Staff</span>
                        </div>
                        <div
                            className="col-sm-6 col-lg-3 text-center wow fadeIn"
                            data-wow-delay="0.7s"
                        >
                            <h1 className="display-4 text-white" data-toggle="counter-up">
                                1234
                            </h1>
                            <span className="fs-5 fw-semi-bold text-light">Awards Achieved</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}
            {/* Service Start */}
            <div className="container-xxl py-">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-bold text-primary">Our Services</p>
                        <h1 className="display-5 mb-5">The Services We Offer </h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="template/img/service/Lfp.png" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img
                                            className="img-fluid"
                                            src="template/img/icon/print.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h4 className="mb-3">Large Format Printing</h4>
                                    <p className="mb-4">
                                        We print large graphics and designs for billboards,
                                        advertisment on cars and buses etc.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="template/img/service/Gd.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img
                                            className="img-fluid"
                                            src="template/img/icon/graphic.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h4 className="mb-3">Graphic Design</h4>
                                    <p className="mb-4">
                                        Creative, innovative and communicative designs for your events and prints.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="template/img/service/Cp.png" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img
                                            className="img-fluid"
                                            src="template/img/icon/color2.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h4 className="mb-3">Digital Colour Press</h4>
                                    <p className="mb-4">
                                        At Mork Impression, we provide high-quality color printing for your professional-quality prints and more.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* more Services */}

                </div>
                <div className="pt-5 text-center">
                    <a className="btn btn-primary py-3 px-4 " style={{ width: "30%" }} href="/services">
                        View All
                    </a>
                </div>

            </div>
            {/* Service End */}
            {/* Quote Start */}
            <div
                className="container-fluid quote my-5 py-5"
                data-parallax="scroll"
                data-image-src="template/img/contact.jpeg"
            >
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div
                                className="bg-white rounded p-4 p-sm-5 wow fadeIn"
                                data-wow-delay="0.5s"
                            >
                                <h1 className="display-5 text-center mb-5">Get A Quote</h1>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-light border-0"
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
                                                className="form-control bg-light border-0"
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
                                                className="form-control bg-light border-0"
                                                id="cname"
                                                placeholder="Child Name"
                                            />
                                            <label htmlFor="cname">Your Mobile</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control bg-light border-0"
                                                id="cage"
                                                placeholder="Child Age"
                                            />
                                            <label htmlFor="cage">Service Type</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control bg-light border-0"
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
