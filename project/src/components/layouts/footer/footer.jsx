import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../common/const';

function Footer() {

  return (
    <footer className="footer" data-testid="footer">
      <Link className="footer__logo-link" to={AppRoute.MAIN}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" data-testid="footer-logo"/>
      </Link>
    </footer>
  );
}

export default Footer;
