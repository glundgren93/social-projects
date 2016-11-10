import React from 'react';

const Jumbotron = ({header, paragraph}) => {
    return (
      <div className="view home-img hm-black-strong">
          <div className="full-bg-img flex-center">
              <ul>
                  <li>
                      <h1 className="h1-responsive wow fadeInDown" data-wow-delay="0.2s">{header}</h1></li>
                  <li>
                      <p className="wow fadeInDown">{paragraph}</p>
                  </li>
              </ul>
          </div>
      </div>
    )
}
export default Jumbotron;
