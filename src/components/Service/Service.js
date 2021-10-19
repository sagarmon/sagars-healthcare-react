import React from 'react';

const Service = (props) => {
    const { name, img, description } = props.service;

    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <button className="btn btn-warning">More details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;