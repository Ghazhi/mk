import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function Services() {
    return (
        <div>
            <Nav />
            {/* Page Header Start */}
            <div
                className="container-fluid page-header py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">
                        Services
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Pages</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Services
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-bold text-primary">Our Services</p>
                        <h1 className="display-5 mb-5">The Services We Offer</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
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
                                        Large graphics and designs for billboards, advertisment on cars and buses etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="template/img/service/Icp.png" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img
                                            className="img-fluid"
                                            src="template/img/icon/print.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h4 className="mb-3">Industrial &amp; Commercial Print</h4>
                                    <p className="mb-4">
                                        We print on products as part of a manufacturing process
                                        which adds value to products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="template/img/service/Lmtn.png" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img
                                            className="img-fluid"
                                            src="template/img/icon/file.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h4 className="mb-3">Industrial Lamination</h4>
                                    <p className="mb-4">
                                        Protect your important files and documents with a protective filming .
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
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
                                        We offer high-quality color printing for your professional-quality prints.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
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
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="template/img/service/color.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img
                                            className="img-fluid"
                                            src="template/img/icon/color1.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h4 className="mb-3">Colour Separation</h4>
                                    <p className="mb-4">
                                        Separating a picture by colors in order to make negatives and plates for color printing.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="template/img/service/Op.png" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img
                                            className="img-fluid"
                                            src="template/img/icon/print.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h4 className="mb-3">Offset Press</h4>
                                    <p className="mb-4">
                                        We offer mass-production print on metal plates,
                                        transferred to rubber blankets or rollers and then to the print media.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src="template/img/service/sp.png" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img
                                            className="img-fluid"
                                            src="template/img/icon/security.png"
                                            alt="Icon"
                                        />
                                    </div>
                                    <h4 className="mb-3">Security Printing</h4>
                                    <p className="mb-4">
                                        Cheques, passports, security tapes, stock certificates, postage stamps and identity cards.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            <Footer />
        </div>
    )
}
