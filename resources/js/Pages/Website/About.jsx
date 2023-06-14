import { useState } from "react";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import { Modal } from "react-responsive-modal";

export default function About() {
    const [open, setOpen] = useState(false);
    function opneFile() {
        // setCurrentFile(filePath);
        setOpen(true);
    }
    return (
        <div>
            <Nav />
            {/* Page Header Start */}
            <div
                className="container-fluid page-header page-header-about py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center mt-5 py-5">
                    <h1 className="display-3 text-white mt-5 animated slideInDown">
                        About
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                About Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}

            <div className="container-xxl pt-5 ">
                <div className="container ">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-5 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                            <img
                                className="img-fluid rounded"
                                style={{ height: "35rem", }}
                                data-wow-delay="0.1s"
                                src="template/img/portfolio/Mug&tomblerPress/Mug&tomblerPress6.jpg"
                            />
                        </div>
                        <div className="col-lg-7 col-md-7 wow fadeInUp " data-wow-delay="0.3s">
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
                            <p className="display-5 text-primary mb-4" style={{ fontSize: "20px" }}>
                                Our Market Position
                            </p>

                            <p className="">
                                The Pre-Press and Press (Printing) industry in Ghana is not very structured
                                and this makes it very difficult to give exact market share as pertains to other industries. Looking at our activities and the number of customers we
                                serve we can say we have a sizeable proportion of the total market share.
                            </p>
                        </div>

                        {/* <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
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
                        </div> */}
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Partners */}
            <div className="container-xxl " style={{ paddingTop: "6rem" }}>
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-bold text-primary"></p>
                        <h1 className="display-5  text-primary">Our Partners </h1>

                    </div>
                    <div className="">
                        <div className="d-flex" style={{ justifyContent: "center" }}>
                            <img className="img-fluid" src="template/img/banners/partners.jpg" style={{ width: "60rem" }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Partners */}
            {/* Team Start */}
            <div className="container-xxl pb-5" style={{ paddingTop: "6rem" }} >
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-bold text-primary">Our Team</p>
                        <h1 className="display-5 mb-5 text-primary">
                            Creative &amp; Experienced Team
                        </h1>
                    </div>
                    <div className="d-flex">
                        <div className="col-4">
                            <div className="team-text">
                                <h4 className="mb-0">Mr. Emmanuel Mork	</h4>
                                <p className="text-primary">  CEO </p>
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
                        <div className="col-4">
                            <div className="team-text">
                                <h4 className="mb-0">Mrs. Sheila Mork	</h4>
                                <p className="text-primary">  Secretary </p>
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

                        <div className="">
                            <div className="team-text">
                                <h4 className="mb-0">Rita Adzo Yiborku	</h4>
                                <p className="text-primary">  Client Services </p>
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
                    {/* <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="template/img/avatar.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Mr. Emmanuel Mork</h4>
                                    <p className="text-primary">CEO </p>
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
                                <img className="img-fluid" src="template/img/avatar.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Mrs. Sheila Mork	</h4>
                                    <p className="text-primary">  Secretary </p>
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
                                <img className="img-fluid" src="template/img/avatar.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Rita Adzo Yiborku	</h4>
                                    <p className="text-primary"> Client Services  </p>
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
                    </div> */}
                </div>
            </div>
            {/* Team End */}
            <Footer />


        </div>
    )
}
