import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ColorMessage, ReviewData } from '../../common/const';

function ReviewFeedback({comment, setComment}) {

  const handleTextareaChange = () => {
    const valueLength = comment.length;
    let currentMessage = '';
    let currentColor = '';

    if (valueLength < ReviewData.MIN_SIMBOL_REVIEW) {
      currentMessage = `Enter ${ReviewData.MIN_SIMBOL_REVIEW - valueLength} more characters`;
      currentColor = ColorMessage.ERROR;
    } else if (valueLength > ReviewData.MAX_SIMBOL_REVIEW) {
      currentMessage = `Remove extra ${  valueLength - ReviewData.MAX_SIMBOL_REVIEW  } characters.`;
      currentColor = ColorMessage.ERROR;
    } else {
      currentMessage = 'Excellent review!';
      currentColor = ColorMessage.SUCCESS;
    }

    return {
      currentMessage: currentMessage,
      currentColor: currentColor,
    };
  };

  return (
    <>
      <textarea
        onInput={handleTextareaChange}
        onChange={(evt) => setComment(evt.target.value)}
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        maxLength={ReviewData.MAX_SIMBOL_REVIEW}
        data-testid="reviews-textarea"
      />
      <output id="comment"
        data-testid="reviews-output"
        style={{fontSize:'10px', color: `${handleTextareaChange().currentColor}`}}
      >
        {handleTextareaChange().currentMessage}
      </output>
    </>
  );
}

ReviewFeedback.propTypes = {
  comment: PropTypes.string,
  setComment: PropTypes.func.isRequired,
};

export default memo(ReviewFeedback);
