import * as actionTypes from '../actions-type/userinfo';

const initialState = {};

export default function userinfo (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return action.data;
    default:
      return state
  }
}