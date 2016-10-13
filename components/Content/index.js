import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Content from './presenter';

const mapStateToProps = (state) => {
  const contents = state.content;

  return {
    contents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getContent: bindActionCreators(actions.getContent, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
