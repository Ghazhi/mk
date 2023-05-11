export default function Banner() {
    return (
        <div>
            {/* Carousel Start */}
            <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
                    <div
                        id="header-carousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{maxHeight:"45rem"}}>
                                <img className="w-100" src="template/img/ip.jpg" alt="Image" />
                                <div className="carousel-caption">
                                   
                                </div>
                            </div>
                            <div className="carousel-item"style={{maxHeight:"45rem"}} >
                                <img  src="template/img/banner1.jpg" alt="Image" />
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
    )
}
