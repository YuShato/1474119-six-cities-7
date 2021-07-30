import React, {useRef} from 'react';
import Header from '../../layouts/header/header';
import { logIn } from '../../../store/api-actions';
import { useDispatch } from 'react-redux';
import { changeCity } from '../../../store/action';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../common/const';

function LoginPage() {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(logIn({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  const handleCityClick = (evt) => {
    evt.preventDefault();
    dispatch(changeCity(evt.target.textContent));
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <div id="error-wrapper"></div>
          <section className="login">
            <h1 className="login__title" data-testid="login-title">Sign in</h1>
            <form className="login__form form" action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper" style={{position: 'relative'}}>
                <label className="visually-hidden" htmlFor="input-email">E-mail</label>
                <input
                  id="input-email"
                  className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email"
                  required
                  autoComplete="username"
                  ref={loginRef} data-testid="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  title="Invalid email address"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper" style={{position: 'relative'}}>
                <label className="visually-hidden" htmlFor="input-password">Password</label>
                <input
                  id="input-password"
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                  autoComplete="current-password"
                  data-testid="password"
                  pattern="^[^\s]+(\s.*)?$"
                  title="Invalid password"
                />
              </div>
              <button className="login__submit form__submit button" type="submit" data-testid="login-submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item" onClick={handleCityClick}>
              <Link className="locations__item-link" to={AppRoute.MAIN}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
