import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../common/const';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../../store/api-actions';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Header() {
  const dispatch = useDispatch();
  const {authorizationStatus, authorizationInfo} = useSelector((state) => state.USER);
  const history = useHistory();

  const handelPushLoginScreen = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.LOGIN);
  };

  const handelUserLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <ToastContainer />
          <nav className="header__nav" data-testid="header-nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.AUTH ?
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img
                          src={authorizationInfo.avatar_url}
                          alt={authorizationInfo.name}
                          style={{borderRadius: '100%'}}
                        />
                      </div>
                      <span className="header__user-name user__name">{authorizationInfo.email}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item" onClick={handelUserLogout}>
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign Out</span>
                    </a>
                  </li>
                </>
                : <span onClick={handelPushLoginScreen} className="header__login">Sign in</span>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
