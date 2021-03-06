import React, { useState } from 'react';
import { Sorting } from '../../common/const';
import { changeSorting } from '../../store/action';
import { useSelector, useDispatch } from 'react-redux';

function SortingList() {

  const {activeSorting} = useSelector((state) => state.PLACES);
  const dispatch = useDispatch();

  const [openedSorting, setOpenedSorting] = useState(false);

  const handleSortingClick = () => {
    setOpenedSorting((prevState) => !prevState);
  };

  const handleSortingChange = (evt) => {
    dispatch(changeSorting(evt.target.innerText));
    setOpenedSorting(false);
  };

  return (
    <form className="places__sorting" action="#" method="get" data-testid="places-sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleSortingClick} data-testid="places-sorting-type">
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {openedSorting &&
      <ul className="places__options places__options--custom places__options--opened" data-testid="places-options">
        {Object.values(Sorting).map((sortingType) => (
          <li className={`places__option ${sortingType === activeSorting ? 'places__option--active' : ''}`}
            key={sortingType}
            tabIndex={0}
            onClick={handleSortingChange}
          >{sortingType}
          </li>
        ))}
      </ul>}
    </form>
  );
}

export default React.memo(SortingList);
