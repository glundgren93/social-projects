import React, { Component } from 'react';

class Content extends Component {
  componentWillMount() {
    this.props.getContent();
  }

  render() {
    const { contents } = this.props;
    const contentList = Object.keys(contents).map((key) => {
      return [
        <li>{contents[key].name}</li>,
        <li>{contents[key].location}</li>,
        <li>{contents[key].description}</li>,
      ]
    });

    return (
      <ul>{ contentList }</ul>
    );
  }
}

export default Content;
