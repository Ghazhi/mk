import { useState } from "react";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";

import Modal from 'react-bootstrap/Modal';
import Filt from '../../ImageFile/Filt'

import Carousel from 'react-bootstrap/Carousel';
import { Link } from "@inertiajs/inertia-react";

// icons
import { AiOutlineEye } from "react-icons/ai"

export default function Services() {
    const [show, setShow] = useState(false);
    const [theId, setId] = useState(null);

    const [title, setTitle] = useState("");
    // const [theImage, setImage] = useState(null);

    const [image1, seteImage1] = useState(null)
    const [image2, seteImage2] = useState(null)
    const [image3, seteImage3] = useState(null)

    const [desc, setDesc] = useState("");

    function doOpen(title, idn, descrptn, img1, img2, img3) {
        setShow(true);
        setId(idn)
        setTitle(title)
        // setImage(image)
        setDesc(descrptn)
        seteImage1(img1)
        seteImage2(img2)
        seteImage3(img3)

    }

    const handleClose = () => setShow(false);

    return (
        <div>
            <Nav />
            {/* Page Header Start */}
            <div
                className="container-fluid  page-header page-header-service py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center mt-5 py-5">
                    <h1 className="display-3 text-white mt-5 animated slideInDown">
                        Services
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link href="/">Home</Link>
                            </li>
                            {/* <li className="breadcrumb-item">
                                <a href="#">Pages</a>
                            </li> */}
                            <li className="breadcrumb-item active" aria-current="page">
                                Services
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}


            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="fs-5 fw-bold text-primary">Our Services</p>
                        <h1 className="display-5 mb-5 text-primary ">The Services We Offer</h1>

                    </div>
                    <div className="row g-4">
                        {Filt.map((item, index) => (
                            <>
                                <div className="col-lg-6 col-md-6 wow fadeInUp" key={item.id}

                                    data-wow-delay="0.1s">
                                    <div className="service-item rounded d-flex h-100">
                                        <div className="service-img rounded">
                                            <div className="serviceTitle border">
                                                <h4>{item.name}</h4>
                                            </div>
                                            <img className="" src={item.img1} alt="" />
                                        </div>
                                        <div className="service-text rounded px-2 py-3">
                                            <div className="btn-square rounded-circle mx-auto mb-3"
                                                onClick={() => doOpen(
                                                    item.name,
                                                    item.id,
                                                    item.description,
                                                    item.img1,
                                                    item.img2,
                                                    item.img3
                                                )}>

                                                <AiOutlineEye

                                                    style={{
                                                        cursor: "pointer",
                                                        width: "2rem",
                                                        height: "2rem",
                                                        color: "orangered"
                                                    }}
                                                />
                                            </div>
                                            <h4 className="mb-3">{item.name}</h4>
                                            <p className="mb-4">
                                                {item.description}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-6 wow fadeInUp" key={item.id} onClick={() => doOpen(item.name, item.id, item.description, item.img1, item.img2, item.img3)} data-wow-delay="0.1s">
                                    <div className="rounded d-flex h-100" style={{ cursor: "pointer" }}>
                                        <div className="service-img rounded" >
                                            <div className="serviceTitle border  ">
                                                <h4 className="" style={{ paddingLeft: "1rem" }}>{item.name}</h4>
                                            </div>
                                            <img className="img-fluid" style={{ width: "37rem", height: "30rem" }} src={item.img1} alt="" />

                                        </div>
                                       
                                    </div>
                                </div> */}
                                <Modal show={show} size="lg" onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title >
                                            <span className="text-center">  {title}</span>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="p-2">
                                            <div className="text-center">
                                                <Carousel fade>
                                                    <Carousel.Item>
                                                        <img
                                                            className="img-fluid w-full"
                                                            style={{ height: "30rem", width: "50rem" }}
                                                            src={image1}
                                                            alt="First slide"
                                                        // style={{maxHeight:"25rem",width:"100%"}}
                                                        />

                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <div className="">
                                                            <img
                                                                className="img-fluid w-full "
                                                                style={{ height: "30rem", width: "50rem" }}
                                                                src={image2}
                                                                alt="Second slide mx-auto"
                                                            // style={{maxHeight:"25rem",width:"100%"}}
                                                            />
                                                        </div>

                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                            className="img-fluid w-full"
                                                            style={{ height: "30rem", width: "50rem" }}
                                                            src={image3}
                                                            alt="Third slide"
                                                        // style={{maxHeight:"25rem",width:"100%"}}
                                                        />
                                                    </Carousel.Item>
                                                </Carousel>
                                                <div className="p-4">
                                                    <p>
                                                        {/* {desc} */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>

                                </Modal>
                            </>

                        ))}
                        {/* <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded d-flex h-100" >
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Large Format Printing</h4>
                                    </div>
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
                                    <h4 className="mb-3" >Large Format Printing</h4>
                                    <p className="mb-4">
                                        Mork Impression is a leading provider of large format printing services. We offer a wide range of large format print solutions,
                                        including banners, posters, signs, and more.
                                        We use the latest printing technology to ensure that our large format prints are of the highest quality.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Industrial &amp; Commercial Print</h4>
                                    </div>
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
                                        We print product descriptions for packaging, catalogs, safety instructions for machinery and manuals.
                                        Our printers produce clean, concise and clear text for easy reading.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Industrial Lamination</h4>
                                    </div>
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
                                        Are you looking to create durable signs, transportation materials, billboards, parts and components for a variety of machines and equipment with a strong, durable,
                                        and versatile lamination solution, then Mork Impression's Industrial Lamination is the perfect option for you.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Digital Colour Press</h4>
                                    </div>
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
                                        We offer printing solution that is fast, accurate, versatile, and cost-effective to produce high-quality color prints.

                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Graphic Design</h4>
                                    </div>
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
                                        Graphic design is a creative field that requires a strong understanding of
                                        visual principles, typography, and color theory. At Mork Impression, our professional team of designers produces
                                        creative, innovative and communicative designs for your events and prints.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Colour Separation</h4>
                                    </div>
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
                                    <p className="mb-4">Do you want to split your images into its component colours so that it can be reproduced in print?
                                        Mork impression prints full-colour and high quality images using colour separation.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Offset Press</h4>
                                    </div>
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

                                        We use wide range of materials in a variety of colors and in high volumes to
                                        print books, magazines, newspapers, packaging, and posters of good and high quality standard.


                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <div className="serviceTitle border">
                                        <h4>Security Printing</h4>
                                    </div>
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
                                        Are you looking to own watermarks, microprinting, security threads, optically variable inks
                                        Cheques, passports, security tapes, stock certificates, postage stamps and identity cards. We, at Mork Impression
                                        are experts in printing documents and items with features that make them difficult to counterfeit.
                                    </p>

                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Service End */}
            <Footer />
        </div>
    )
}
