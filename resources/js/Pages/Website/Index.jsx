import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import { GiArcheryTarget, GiReceiveMoney, GiSandsOfTime, GiStrong, GiWorld } from "react-icons/gi";
import { MdGppGood, MdOutlineDraw } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineBgColors } from "react-icons/ai";

export default function Index() {
    return (
        <div>

            <Nav />
            <div>
                {/* Carousel Start */}
                <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
                    <div
                        id="header-carousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img className="w-100" style={{ width: "100%", height: "40rem" }}  src="template/img/portfolio/Resized/vehicle.jpg" alt="Image" />
                            </div>
                            <div className="carousel-item"  >
                                <img className="w-100" style={{ width: "100%", height: "40rem" }} src="template/img/portfolio/Resized/commercial.jpg"  alt="Image" />
                            </div>
                            <div className="carousel-item"  >
                                <img className="w-100" style={{ width: "100%", height: "40rem" }} src="template/img/portfolio/Resized/dtf.jpg" alt="Image" />
                            </div>
                            <div className="carousel-item"  >
                                <img className="w-100" style={{ width: "100%", height: "40rem" }} src="template/img/portfolio/Resized/gifts.jpg" alt="Image" />
                            </div>
                            <div className="carousel-item"  >
                                <img className="w-100" style={{ width: "100%", height: "40rem" }} src="template/img/portfolio/Resized/Large.jpg" alt="Image" />
                            </div>

                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#header-carousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#header-carousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Carousel End */}
            </div>
            {/*  */}


            {/* Top Feature Start */}
            {/* <div className="container-fluid top-feature py-5 pt-lg-0">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 px-5"
                                style={{ minHeight: 160 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <i className="fa fa-check text-primary" />
                                    </div>
                                    <div className="ps-3">
                                        <h4>Integrity</h4>
                                        <span className="text-black">We operate with high standards.</span>
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
                                        <span>We strive to meet your needs.</span>
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
                                        <span>We are always at your service.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Top Feature End */}
            {/* Features Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="fs-5 fw-bold text-primary">Why Choose Us!</p>
                            <h1 className=" mb-4 text-primary" >
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
                                                    <GiArcheryTarget style={{ width: 60, height: 60, color: "red" }} />
                                                    {/* <img src="template/img/icon/check.png" alt="" /> */}
                                                </div>
                                                <h4 className="mb-0 text-primary" >OUR VISION</h4>
                                                <p className="pt-2" style={{ fontSize: "15px" }}>
                                                    We seek to be the leading producers of both Primary and
                                                    Secondary Packaging
                                                    materials in Ghana and the Sub-Region as a whole.
                                                </p>
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
                                                    {/* <img src="template/img/icon/time.png" alt="" /> */}
                                                    <GiWorld style={{ width: 60, height: 60, color: "red" }} />
                                                </div>
                                                <h4 className="mb-0 text-primary">OUR MISSION</h4>
                                                <p className="pt-2">
                                                    To deliver what we promise with accuracy,
                                                    speed and add value beyond what our clients expect.
                                                </p>
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
                                            <MdGppGood style={{ width: 60, height: 60, color: "red" }} />
                                            {/* <img src="template/img/icon/price.png" alt="" /> */}
                                        </div>
                                        <h4 className="mb-0 text-primary">QUALITY</h4>
                                        <p>
                                            We are dedicated to the pursuit of the highest quality in all our work for clients.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
            {/* Facts Start */}
            {/* <div
                className="container-fluid facts wow fadeInUp my-5 py-5"
                data-parallax="scroll"
                data-image-src="template/img/copy.png"

            > */}
            <div
                className="container-fluid facts my-5 py-5"
                style={{
                    backgroundImage: "url('template/img/new.png')",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }}
            >
                <div className="container  py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 px-5"
                                style={{ minHeight: 160 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        {/* <i className="fa fa-check text-primary"  /> */}
                                        <BiTargetLock style={{ width: 30, height: 30, color: "gray" }} />
                                    </div>
                                    <div className="ps-3">
                                        <h4 style={{ color: "rgb(236,42,145)" }}>Uncompromising Quality</h4>
                                        {/* <span className="text-black">We operate with high standards.</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 px-5"
                                style={{ minHeight: 160 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        {/* <i className="fa fa-check text-primary" /> */}
                                        <GiSandsOfTime style={{ width: 30, height: 30, color: "gray" }} />
                                    </div>
                                    <div className="ps-3">
                                        <h4 style={{ color: "rgb(236,42,145)" }} >Timely Deliveries</h4>
                                        {/* <span className="text-black">We operate with high standards.</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 px-5"
                                style={{ minHeight: 160 }}
                            >
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        {/* <i className="fa fa-check text-primary" /> */}


                                        <GiReceiveMoney style={{ width: 30, height: 30, color: "grey" }} />

                                    </div>
                                    <div className="ps-3">
                                        <h4 style={{ color: "rgb(236,42,145)" }}>Competitive Prices</h4>
                                        {/* <p>
                                            We seek to be the leading producers of both Primary and Secondary Packaging materials in Ghana and the Sub-Region as a whole.
                                        </p> */}
                                    </div>

                                    {/* <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                                        <i className="fa fa-check text-primary" />
                                    </div>
                                    <div className="ps-3">
                                        <h4 style={{color:"rgb(91, 0, 91)"}}>Integrity</h4>
                                        <span className="text-black">We operate with high standards.</span>
                                    </div> */}
                                </div>
                            </div>
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
                        <h1 className="display-5 mb-5 text-primary">The Services We Offer </h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Industrial & Commercial Print</h4>
                                    </div>
                                    <img className="img-fluid" src="template/img/service/ICprint/1.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square  rounded-circle mx-auto mb-3">
                                        {/* <img
                                            className="img-fluid"
                                            src="template/img/icon/print.png"
                                            alt="Icon"
                                        /> */}
                                        <BsPrinter style={{ width: "3rem", height: "3rem" }} />
                                    </div>
                                    <h4 className="mb-3">Industrial & Commercial Print</h4>
                                    <p className="mb-4">
                                        Our printers produce clean,
                                        concise and clear text for easy reading.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Graphic Design</h4>
                                    </div>
                                    <img className="img-fluid" src="template/img/service/Design/1.jpg" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        {/* <img
                                            className="img-fluid"
                                            src="template/img/icon/graphic.png"
                                            alt="Icon"
                                        /> */}
                                        <MdOutlineDraw style={{ width: "3rem", height: "3rem" }} />
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
                                    <div className="serviceTitle border">
                                        <h4>Digital Colour Press</h4>
                                    </div>
                                    <img className="img-fluid" src="template/img/service/Op.png" alt="" />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        {/* <img
                                            className="img-fluid"
                                            src="template/img/icon/color2.png"
                                            alt="Icon"
                                        /> */}
                                        <AiOutlineBgColors style={{ width: "3rem", height: "3rem" }} />
                                    </div>
                                    <h4 className="mb-3">Offset Press</h4>
                                    <p className="mb-4">
                                        We use wide range of materials in a variety of colors and in high volumes to print books, magazines, newspapers, packaging, and posters of good and high quality standard.
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
            {/* Quote Start */}
            <div
                className="container-fluid facts my-5 py-5"
                // data-parallax="scroll"
                style={{
                    backgroundImage: "url('template/img/quote.jpg')",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }}
            >
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div
                                className="bg-white rounded p-4 p-sm-5 wow fadeIn"
                                data-wow-delay="0.5s"
                            >
                                <h1 className="display-5 text-center mb-5 text-primary">Get A Quote</h1>
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

                                            <select name=""
                                                type="text"
                                                className="form-control bg-light border-0"
                                                // id="cage"
                                                placeholder="Select A Service"
                                                id=""
                                            >
                                                <option value=""></option>
                                                <option value="">Large Format Printing</option>
                                                <option value="">Industrial & Commercial Print</option>
                                                <option value="">Graphic Design</option>
                                                <option value="">Colour Separation</option>
                                                <option value="">Offset Press</option>
                                                <option value="">Security Printing</option>
                                            </select>
                                            <label htmlFor="cage pb-3">Service Type</label>
                                            {/* <input
                                                type="text"
                                                className="form-control bg-light border-0"
                                                id="cage"
                                                placeholder="Child Age"
                                            /> */}
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
