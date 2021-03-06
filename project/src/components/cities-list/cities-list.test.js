import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import CitiesList from './cities-list';
import { CITIES } from '../../common/const';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore();

describe('Test \'CitiesList\'', () => {
  it('Render \'CitiesList\'', () => {
    render(
      <redux.Provider store={mockStore({PLACES: {activeCity: 'Paris'}})}>
        <CitiesList />
      </redux.Provider>,
    );

    for (const item of CITIES) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it('Should call dispatch when user click on city', () => {
    const fakeDispatch = jest.spyOn(redux, 'useDispatch');

    render(
      <redux.Provider store={mockStore({PLACES: {activeCity: ''}})}>
        <CitiesList />
      </redux.Provider>,
    );

    for (const item of CITIES) {
      userEvent.click(screen.getByText(item));
      expect(fakeDispatch).toBeCalled();
    }
  });
});
