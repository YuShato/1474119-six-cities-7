import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../../common/const';

const DEFAULT_TIMEOUT = 10000;


function ErrorNotification({message = ErrorMessage.DEFAULT}) {

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, DEFAULT_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div >
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '22px',
            zIndex: 10,
          }}
        >
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}


ErrorNotification.propTypes = {
  message: PropTypes.string,
};

export default ErrorNotification;

