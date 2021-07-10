import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoute } from '../../const';
import { AuthorizationStatus } from '../../const';

function PrivateRoute ({render, path, exact, user}) {
  const {status} = user;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => status === AuthorizationStatus.AUTH
        ? render(routeProps)
        : <Redirect to={AppRoute.LOGIN} />}
    />
  );
}

PrivateRoute.propTypes = {
  user: PropTypes.shape({
    status: PropTypes.string,
    data: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  }),
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
