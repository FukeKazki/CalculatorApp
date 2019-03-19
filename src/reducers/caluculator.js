import * as actionTypes from '../utils/actionTypes';
/*
Stateの構造を固め、utils/actionTypes で列挙したconstをもとにStateの更新ロジックを書く
機能によって複数のファイルに分ける
*/
//初期Stateを決めている
const initialAppState = {
    inputValue: 0,
    resultValue: 0,
    showingResult: false,
};
//前のStateとActionを受け取りaction.typeの値に応じてswitch文で更新ロジックを決定する(パターンが少ない場合はif文でも良い)
//更新ロジックが決定したらそのロジックに従い新しいStateを返す
const calculator = (state = initialAppState, action) => {
    switch(action.type){
        case actionTypes.INPUT_NUMBER:
            return {
                ...state,
                inputValue: state.inputValue * 10 + action.number,
                showingResult: false,
            };
        case actionTypes.PLUS:
            return {
                ...state,
                inputValue: 0,
                resultValue: state.resultValue + state.inputValue,
                showingResult: true,
            };
        case actionTypes.TIMES:
            return {
                ...state,
                inputValue: 0,
                resultValue: state.resultValue * state.inputValue,
                showingResult: true,
            };
        case actionTypes.DIVIDED:
            return {
                ...state,
                inputValue: 0,
                resultValue: state.resultValue / state.inputValue,
                showingResult: true,
            };
        case actionTypes.MINUS:
            return {
                ...state,
                inputValue: 0,
                resultValue: state.resultValue - state.inputValue,
                showingResult: true,
            };
        default:
            return state;
    }
};

export default calculator;