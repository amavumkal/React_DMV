"use strict";

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, applyMiddleware } from "redux";
//import thunk from "redux-thunk";

import * as authActions from "../Auth";
//import BookRender from "./BookRender";

const AuthContainer = (props) => {
  useEffect(() => {
    const { actions } = props;
    actions.getToken2();
  }, []);

  return <div>{"Test" /* <BookRender {...props} /> */}</div>;
};

function mapStateToProps(state) {
  //   console.log("can u see this?");
  //   console.log(state);
  //   console.log(state.authReducer);
  console.log(state.authReducer.authData);

  return {
    authData: state.authReducer.authData,

    //accessToken: state.authReducer.accessToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
}

AuthContainer.propTypes = {
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);