import { createReducer, makeId } from 'utils';

const SAVE_USER_INFO = 'SAVE_USER_INFO';
const SAVE_USER_AREA_INTEREST = 'SAVE_USER_AREA_INTEREST';

const initialState = {
  userDetails :{}
};

export default createReducer(initialState, {
  [SAVE_USER_INFO]: (state, action) => {
      const r = {...state};
      r.userDetails = action.userDetails;
      return r;
  },
  [SAVE_USER_AREA_INTEREST]: (state, action) => {
    const r = {...state};
    r.userDetails['userAreaInterest'] = action.userInterest;
    return r;
  }
});
