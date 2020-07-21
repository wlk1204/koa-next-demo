import {
  createAction,
  handleActions,
  combineActions,
  createActions,
  Reducer,
} from "redux-actions";

const initState = {
  boardComps: [],
  currentComps: null,
};

const SELECTCOMP = "$SELECTCOMP";
const BOARDCOMP = "$BOARDCOMP";

export const $SELECTCOMP = createAction(SELECTCOMP);
export const $BOARDCOMP = createAction(BOARDCOMP);

const editor = handleActions(
  {
    [SELECTCOMP]: (state, action) => ({ ...state, ...action.payload }),
    [BOARDCOMP]: (state, action) => ({ ...state, ...action.payload }),
  },
  initState
);

export default {
  editor,
};
