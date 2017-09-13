import * as actionTypes from '../actions-type/userinfo'

export function update(data) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}