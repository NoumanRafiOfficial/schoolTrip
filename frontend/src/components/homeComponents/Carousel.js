import React from 'react'
import car01 from '../../images/car01.jpg'
import car02 from '../../images/car05.jpeg'
import car03 from '../../images/car03.jpg'

const Carousel = () => {
    return (
        <div>
            < div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={car01} className="d-block w-100 opacity-50" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className='display-3 bg-black opacity-75 text-warning border border-warning mb-3 w-75 m-auto p-2'>"Safe, Reliable Transportation for Students"</div>
                            {/* <div style={{ marginBottom: '10%' }} >aaa</div> */}
                            {/* <button className='btn btn-primary'>button</button> */}
                            {/* <h2 style={{ backgroundColor: 'black', width: '30%', margin: 'auto', padding: '1%' }}>First slide label</h2> */}
                            {/* <h6 style={{ color: 'black', backgroundColor: 'orange', width: '100%', margin: 'auto', padding: '1%' }}>Some representative placeholder content for the first slide.Some representative placeholder content for the first slide.Some representative placeholder content for the first slide.Some representative placeholder content for the first slide.</h6> */}
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={car02} className="d-block w-100 opacity-50" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <div className='display-3 bg-black opacity-75 text-warning border border-warning mb-3 w-50 m-auto p-2'>"Flexible Scheduling"</div>
                            {/* <h2>Second slide label</h2> */}
                            {/* <h6>Some representative placeholder content for the second slide.</h6> */}
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={car03} className="d-block w-100 opacity-50" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <div className='display-3 bg-black opacity-75 text-warning border border-warning mb-3 w-75 m-auto p-2'>"Friendly & Professional Environment"</div>
                            {/* <h2>Third slide label</h2> */}
                            {/* <h6>Some representative placeholder content for the third slide.</h6> */}
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div >
        </div>
    )
}

export default Carousel

