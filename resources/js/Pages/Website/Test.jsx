import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Filt from './Filt';

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

export default function Test() {
    const [show, setShow] = useState(false);
    const [theId, setId] = useState(null);
    function doOpen(idn) {
        setShow(true);

        setId(idn)

    }

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
        },
        [ThumbnailPlugin(instanceRef)]
    )


    return (
        <>

            <div className="pt-2" >
                <div ref={sliderRef} className="keen-slider">
                    {Files.map((itm, ind) => (

                        <div className={`keen-slider__slide number-slide${ind} `} >
                            <div className="text-center" >
                                <div className="pb-3" >
                                    {/* {itm} */}
                                    <img src={itm} className="img-fluid" style={{ height: "40rem", width: "50%" }} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* <div className="keen-slider__slide number-slide2">2</div>
                    <div className="keen-slider__slide number-slide3">3</div>
                    <div className="keen-slider__slide number-slide4">4</div>
                    <div className="keen-slider__slide number-slide5">5</div>
                    <div className="keen-slider__slide number-slide6">6</div> */}
                </div>

                <div style={{paddingLeft:"10rem",paddingRight:"10rem"}}> 
                    <div ref={thumbnailRef} className="keen-slider thumbnail">
                        {Files.map((itm, ind) => (
                            <div className="">
                                <div className={` keen-slider__slide number-slide${ind} `}  >
                                    <img src={itm} className="img-fluid" style={{ height: "9rem", width: "100%" }} alt="" />
                                </div>
                            </div>
                        ))}
                        {/* <div className="keen-slider__slide number-slide1">1</div>
                    <div className="keen-slider__slide number-slide2">2</div>
                    <div className="keen-slider__slide number-slide3">3</div>
                    <div className="keen-slider__slide number-slide4">4</div>
                    <div className="keen-slider__slide number-slide5">5</div>
                    <div className="keen-slider__slide number-slide6">6</div> */}
                    </div>
                </div>
            </div>
            {Filt.map((itm, ind) => (
                <div key={itm.id} >
                    <Button onClick={() => doOpen(itm.id)}>{itm.id}</Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{theId}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            ))}
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}
