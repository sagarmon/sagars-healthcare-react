import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img1 from '../../banner-images/img1.png';
import img2 from '../../banner-images/img2.png';
import img3 from '../../banner-images/img3.png';
import Service from '../Service/Service';
import safety from '../../images/safety.png';

const Home = () => {
    // const { user } = useAuth();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div>
            <header className="container m-5">
                <div className="jumbotron">
                    <h1 className="display-4 mb-3">Welcome to <span className="text-decoration-underline">Sagar's Healthcare</span></h1>
                    <h3>WELCOME TO THE FITNESS HUB THAT’S 24/7 HUMAN</h3>
                    <p className="lead">Whether you’re a fitness newbie or seasoned pro, the Sagar's Healthcare Fitness Hub helps you hit your goals. <br /> Use it at home or to complement your in-gym training – it’s up to you. Daily workouts, live training sessions, meal plans, <br /> health advice and more are just a click away – and it’s all free.</p>
                    {/* <hr className="my-4" /> */}
                    <Link className="btn btn-primary btn-dark btn-lg" to="/about" role="button">Learn more</Link>
                </div>
            </header>
            <hr />
            <main className="mb-5">
                <div className="container">
                    <h1 className="mb-3">Services</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            >
                            </Service>)
                        }
                    </div>
                </div>

                {/* carousel */}
                <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div>
                    <img src={safety} className="w-100" alt="" />
                </div>
            </main>
        </div>
    );
};

export default Home;