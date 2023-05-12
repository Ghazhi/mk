export default function Footer() {
    return (
        <div>
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-white mb-4">Our Office</h4>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3" />
                                Mamprobi, A1161/3, Do Adokwei St. Accra
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3" />
                                233 244 372 598
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3" />
                                233 302 316 441
                            </p>
                            <div className="d-flex pt-2">
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-2"
                                    href=""
                                >
                                    <i className="fab fa-twitter" />
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-2"
                                    href=""
                                >
                                    <i className="fab fa-facebook-f" />
                                </a>

                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-2"
                                    href=""
                                >
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-white mb-4">Services</h4>
                            <a className="btn btn-link" href="">
                                Large Format Printing
                            </a>
                            <a className="btn btn-link" href="">
                                Industrial Lamination
                            </a>
                            <a className="btn btn-link" href="">
                                Industrial & Commercial Print
                            </a>
                            <a className="btn btn-link" href="">
                                Digital Colour Press
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="/about">
                                About Us
                            </a>
                            <a className="btn btn-link" href="/services">
                                Our Services
                            </a>
                            <a className="btn btn-link" href="/portfolio">
                                Portfolio
                            </a>
                            <a className="btn btn-link" href="/quote">
                                Get A Quote
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Copyright Start */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            ©{" "}
                            <a className="border-bottom" href="#">
                                Mork Impression
                            </a>
                            , All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                            Designed by{" "}
                            <a className="border-bottom" href="https://bm-consulting.com">
                                bm-consulting
                            </a>{" "}
                            Distributed By <a href="https://bm-consulting.com">bm-consulting</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}
            {/* Back to Top */}
            <a
                href="#"
                className="btn btn-lg btn-primary  rounded-circle back-to-top pb-1"
            >
                {/* <i className="bi bi-arrow-up" /> */}
                &#x2191;
            </a>
        </div>
    )
}
