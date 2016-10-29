import React from 'react';

const Jumbotron = ({header, paragraph}) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1>{header}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}
export default Jumbotron;
