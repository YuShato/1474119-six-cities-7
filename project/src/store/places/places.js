import { createReducer } from '@reduxjs/toolkit';
import { CITIES, Sorting } from '../../common/const';
import { changeCity, changeSorting, getActivePlace } from '../action';

const initialState = {
  activeCity: CITIES[0],
  activeSorting: Sorting.POPULAR,
  activePlaceId: null,
};

const places = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.activeCity = action.payload;
  });

  builder.addCase(getActivePlace, (state, action) => {
    state.activePlaceId = action.payload;
  });

  builder.addCase(changeSorting, (state, action) => {
    state.activeSorting = action.payload;
  });
});

export {places};
