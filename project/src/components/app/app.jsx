import React from 'react';
import Main from '../main/main';
import {number, shape, string, arrayOf, bool} from 'prop-types';

function App(props) {
  const {mockCardsData} = props;
  return (
    <Main mockCardsData={mockCardsData}/>
  );
}

App.propTypes = {
  mockCardsData: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      imgPreview: string.isRequired,
      price: number.isRequired,
      isPremium: bool.isRequired,
    }),
  ),
};
export default App;
