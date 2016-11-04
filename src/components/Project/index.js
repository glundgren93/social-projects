import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProject } from '../../actions';
import Project from './presenter';

const mapStateToProps = (state) => ({
    project: state.project
})

export default connect(
  mapStateToProps,
  { getProject } // injects getContent
)(Project);
