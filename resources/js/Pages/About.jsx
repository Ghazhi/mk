import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

export default function About() {
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
                        About Us
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                About Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* About Start */}
            <div className="container-xxl py-5 ">
                <div className="container ">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                            <img
                                className="img-fluid rounded"
                                style={{height:"32rem",}}
                                data-wow-delay="0.1s"
                                src="template/img/about/about.jpeg"
                            />
                        </div>
                        <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                            <p className="display-5 text-primary mb-4">About Us</p>

                            <p className="mb-4">
                                We are a Printing Press incorporated in Ghana, with a state of
                                the art Digital and Offset printing machines. Our company was
                                established in 2005 out of a passionate desire and commitment
                                to
                                undertake General printing and primary packaging.
                            </p>
                            <p className="mb-4">
                                We produce to precision, accuracy and exactitude.
                                Our high-resolution pre-press equipment releases every pantone
                                with the exact colour density that meets modern demands of any
                                Organisation.
                                We provide services with speed and accuracy.
                            </p>
                            <p className="mb-4">
                                Our professionals have identified certain needs in the export
                                and food processing sector. These needs are graphic design,
                                image setter, offset printing and production of primary
                                packaging and skillets to support the overall business
                                objectives in order to generate significant growth and superior
                                stakeholders’ value.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row g-5">
                                <div className="col-12 col-sm-6 col-lg-12">
                                    <div className="border-start ps-4">
                                        <i className="fa fa-award fa-3x text-primary mb-3" />
                                        <h4 className="mb-3">Award Winning</h4>
                                        <span>
                                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                            justo magna
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-12">
                                    <div className="border-start ps-4">
                                        <i className="fa fa-users fa-3x text-primary mb-3" />
                                        <h4 className="mb-3">Dedicated Team</h4>
                                        <span>
                                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                                            justo magna
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-bold text-primary">Our Team</p>
                        <h1 className="display-5 mb-5">
                            Dedicated &amp; Experienced Team Members
                        </h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="template/img/team-1.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Doris Jordan</h4>
                                    <p className="text-primary">Landscape Designer</p>
                                    <div className="team-social d-flex">
                                        <a className="btn btn-square rounded-circle me-2" href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-square rounded-circle me-2" href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="btn btn-square rounded-circle me-2" href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="template/img/team-2.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Johnny Ramirez</h4>
                                    <p className="text-primary">Garden Designer</p>
                                    <div className="team-social d-flex">
                                        <a className="btn btn-square rounded-circle me-2" href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-square rounded-circle me-2" href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="btn btn-square rounded-circle me-2" href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="template/img/team-3.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Diana Wagner</h4>
                                    <p className="text-primary">Senior Gardener</p>
                                    <div className="team-social d-flex">
                                        <a className="btn btn-square rounded-circle me-2" href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-square rounded-circle me-2" href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="btn btn-square rounded-circle me-2" href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            <Footer />


        </div>
    )
}
