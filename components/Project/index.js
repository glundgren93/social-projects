import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjects } from '../../actions';
import Project from './presenter';

const mapStateToProps = (state) => ({
    projects: state.project
})

export default connect(
  mapStateToProps,
  { getProjects } // injects getContent
)(Project);
