import { combineReducers } from 'redux';
import calculator from './caluculator';
/*
複数に分けたファイルをimportする
*/
const reducer = combineReducers({
    calculator,
});

export default reducer;