import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthorizationStatus, AppRoute } from '../../common/const';


function PrivateLoginRoute({render, path, exact}) {
  const {authorizationStatus} = useSelector((state) => state.USER);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.NO_AUTH ||
        authorizationStatus === AuthorizationStatus.UNCNOWN
          ? render(routeProps)
          : <Redirect to={AppRoute.MAIN} />
      )}
    />
  );
}

PrivateLoginRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateLoginRoute;
