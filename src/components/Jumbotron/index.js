import React from 'react';

const Jumbotron = ({header, paragraph}) => {
    return (
      <div id="carousel-example-1" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                  <div className="flex-center">
                      <ul>
                          <li>
                              <h1 className="h1-responsive">{header}</h1></li>
                          <li>
                              <p>{paragraph}</p>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
}
export default Jumbotron;
