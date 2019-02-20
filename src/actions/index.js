import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (number) => ({
    type: actionTypes.INPUT_NUMBER,
    number,
});
export const onPlusClick = () => ({
    type: actionTypes.PLUS,
});
export const onTimesClick = () => ({
    type: actionTypes.TIMES,
});
export const onDividedClick = () => ({
    type: actionTypes.DIVIDED,
});
export const onMinusClick = () => ({
    type: actionTypes.MINUS,
});