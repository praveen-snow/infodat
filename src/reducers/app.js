import { createReducer, makeId } from 'utils';

const THANK_YOU_MESSAGE = 'THANK_YOU_MESSAGE';

const initialState = {
  thankMessage :null
};

export default createReducer(initialState, {
  [THANK_YOU_MESSAGE]: (state, action) => {
      const r = {...state};
      r.thankMessage = action.thankMessage;
      return r;
  },
});
