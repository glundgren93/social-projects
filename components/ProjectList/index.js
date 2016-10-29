import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjects } from '../../actions';
import ProjectList from './presenter';

const mapStateToProps = (state) => ({
    projects: state.projectList
})

export default connect(
  mapStateToProps,
  { getProjects } // injects getContent
)(ProjectList);
