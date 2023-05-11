import Footer from "../Components/Footer"
import Nav from "../Components/Nav"

export default function Portfolio() {
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
                        Projects
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
                                Projects
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Projects Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-bold text-primary">Our Projects</p>
                        <h1 className="display-5 mb-5">Some Of Our Awesome Projects</h1>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12 text-center">
                            
                        </div>
                    </div>
                    <div className="row g-4 portfolio-container">
                        <div
                            className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="template/img/portfolio/portfolio1.jpeg" alt="" />
                                <div className="portfolio-text">
                                    {/* <h4 className="text-white mb-4">Landscaping</h4> */}
                                    <div className="d-flex">
                                        <a
                                            className="btn btn-lg-square rounded-circle mx-2"
                                            target="_blank"
                                            href="template/img/portfolio/portfolio1.jpeg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye" />
                                        </a>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="template/img/portfolio/portfolio2.jpeg" alt="" />
                                <div className="portfolio-text">
                                    {/* <h4 className="text-white mb-4">Pruning plants</h4> */}
                                    <div className="d-flex">
                                        <a
                                            className="btn btn-lg-square rounded-circle mx-2"
                                            target="_blank"
                                            href="template/img/portfolio/portfolio2.jpeg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye" />
                                        </a>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="template/img/portfolio/portfolio3.jpeg" alt="" />
                                <div className="portfolio-text">
                                    {/* <h4 className="text-white mb-4">Irrigation &amp; Drainage</h4> */}
                                    <div className="d-flex">
                                        <a
                                            className="btn btn-lg-square rounded-circle mx-2"
                                            target="_blank"
                                            href="template/img/portfolio/portfolio3.jpeg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="template/img/portfolio/portfolio4.jpeg" alt="" />
                                <div className="portfolio-text">
                                    {/* <h4 className="text-white mb-4">Garden Maintenance</h4> */}
                                    <div className="d-flex">
                                        <a
                                            className="btn btn-lg-square rounded-circle mx-2"
                                            target="_blank"
                                            href="template/img/portfolio/portfolio4.jpeg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye" />
                                        </a>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="template/img/portfolio/portfolio5.jpeg" alt="" />
                                <div className="portfolio-text">
                                    {/* <h4 className="text-white mb-4">Green Technology</h4> */}
                                    <div className="d-flex">
                                        <a
                                            className="btn btn-lg-square rounded-circle mx-2"
                                            target="_blank"
                                            href="template/img/portfolio/portfolio5.jpeg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye" />
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="portfolio-inner rounded">
                                <img className="img-fluid" src="template/img/portfolio/portfolio6.jpeg" alt="" />
                                <div className="portfolio-text">
                                    {/* <h4 className="text-white mb-4">Urban Gardening</h4> */}
                                    <div className="d-flex">
                                        <a
                                            className="btn btn-lg-square rounded-circle mx-2"
                                            target="_blank"
                                            href="template/img/portfolio/portfolio6.jpeg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye" />
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects End */}
            <Footer />

        </div>
    )
}
