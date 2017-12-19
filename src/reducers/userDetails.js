import { createReducer, makeId } from 'utils';

const SAVE_USER_INFO = 'SAVE_USER_INFO';

const initialState = {
  userDetails :{}
};

export default createReducer(initialState, {
  [SAVE_USER_INFO]: (state, action) => {
      const r = {...state};
      r.userDetails = action.userDetails;
      return r;
  },
});
