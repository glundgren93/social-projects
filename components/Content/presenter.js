import React, { Component } from 'react';

class Content extends Component {
  componentWillMount() {
    this.props.getContent();
  }

  render() {
    const { contents } = this.props;

    const contentList = contents.map((content) => {
      return [
        <li>{content.name}</li>,
        <li>{content.location}</li>,
        <li>{content.description}</li>
      ]
    });

    return (
      <ul>{ contentList }</ul>
    );
  }
}

export default Content;
