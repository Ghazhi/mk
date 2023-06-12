import { Link } from "@inertiajs/inertia-react"
import Footer from "../../Components/Footer"
import Nav from "../../Components/Nav"
import Imgs from "./Imgs"

import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
// //////

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Files from '../../ImageFile/FIles.jsx';
// import "./styles.css"

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

export default function Portfolio() {
    const [currentGallery, setCurrentGallery] = useState();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)


    function openGallery(gallery, index) {
        setCurrentGallery(
            gallery.map((gallery) => ({
                src: `template/img/portfolio/${gallery}`,
            }))
        );
        setSelectedIndex(index);
    }

    const handleClose = () => setShow(false)
    // //////// /////
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 5,
                spacing: 5,
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <div>
            <Nav />
            {/* Page Header Start */}
            <div
                className="container-fluid page-header page-header-portfolio  py-5 mb-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container mt-5 text-center py-5">
                    <h1 className="display-3 text-white  mt-5 animated slideInDown">
                        Portfolio
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link href="/">Home</Link>
                            </li>

                            <li className="breadcrumb-item active" aria-current="page">
                                Portfolio
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
                        <h1 className="display-5 mb-5 text-primary">Some Of Our Awesome Projects</h1>
                    </div>
                    <div className="row wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12 text-center">

                        </div>
                    </div>
                    {/*  ///////////*/}
                    <div className="pt-4" >
                        <div ref={sliderRef} className="keen-slider">
                            {Files.map((itm, ind) => (

                                <div className={`keen-slider__slide number-slide${ind} `} >
                                    <div className="text-center" >
                                        <div className="pb-3" >
                                            <img src={itm} className="img-fluid" style={{ height: "30rem", }} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div style={{ paddingLeft: "6rem", paddingRight: "6rem" }}>
                            <div ref={thumbnailRef} className="keen-slider thumbnail">
                                {Files.map((itm, ind) => (
                                    <div className="">
                                        <div className={` keen-slider__slide number-slide${ind} `}  >
                                            <img src={itm} className="img-fluid" style={{ height: "9rem", width: "100%" }} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            {loaded && instanceRef.current && (
                                <>
                                    <Arrow

                                        left
                                        onClick={(e) =>
                                            e.stopPropagation() || instanceRef.current?.prev()
                                        }
                                        disabled={currentSlide === 0}
                                    />

                                    <Arrow
                                    right
                                        onClick={(e) =>
                                            e.stopPropagation() || instanceRef.current?.next()
                                        }
                                        disabled={
                                            currentSlide ===
                                            instanceRef.current.track.details.slides.length - 1
                                        }
                                    />
                                </>
                            )}
                        </div>

                    </div>
                    {/*  ///////////*/}
                    {/*
                     <div className="row g-4 portfolio-container">
                        {Imgs.map((item, index) => (
                            <div
                                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="portfolio-inner rounded">
                                    <img className="img-fluid" src={item.img} alt="" />
                                    <div className="portfolio-text">
                                        <h4 className="text-white text-center mb-4">{item.name}</h4>
                                        <div className="d-flex">
                                            <span
                                                onClick={() => openGallery(item.imgs, index)}
                                                className="btn btn-lg-square rounded-circle mx-2"
                                                data-lightbox="portfolio"
                                            >
                                                <i className="fa fa-eye" />
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div> */}
                </div>
            </div>
            {/* Projects End */}
            {/* Quote Start */}
            <div className=" col ">
                <div className="container   py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div
                                className="bg-white rounded border shadow p-4 p-sm-5 wow fadeIn"
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
function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}