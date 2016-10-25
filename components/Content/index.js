import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContent } from '../../actions';
import Content from './presenter';

const mapStateToProps = (state) => ({
    contents: state.content
})

export default connect(
  mapStateToProps,
  { getContent } // injects getContent
)(Content);
