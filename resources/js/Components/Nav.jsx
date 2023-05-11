export default function Nav() {
    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark text-light px-0 py-2" >
                <div className="row gx-0 d-none d-lg-flex ">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span className="fa fa-phone-alt me-2" />
                            <span className="px-1">030 2326 403</span>
                            <span className="px-1">030 2316 441</span>
                            <span className="px-1">030 2234 765</span>
                        </div>

                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a
                    href="/"
                     
                    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
                >
                    {/* <h1 className="m-0">Gardener</h1> */}
                   
                    <img src="template/img/Logo.png" style={{height:"2rem"}} alt="" />
                    
                   
                </a>
                <div className="">
                    {/* <img src="template/img/Logo.png" style={{width:"2rem",height:"2rem"}} alt="" /> */}
                </div>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/" className="nav-item nav-link ">
                            Home
                        </a>
                        <a href="/about" className="nav-item nav-link">
                            About
                        </a>
                        <a href="/services" className="nav-item nav-link">
                            Services
                        </a>
                        <a href="/portfolio" className="nav-item nav-link">
                            Portfolio
                        </a>
                        <a href="/quote" className="nav-item nav-link">
                            Quote
                        </a>

                    </div>

                </div>
            </nav>
            {/* Navbar End */}
        </div>
    )
}
