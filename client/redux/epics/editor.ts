import { interval, of, Observable } from "rxjs";
import { takeUntil, mergeMap, catchError, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { createAction, Action } from "redux-actions";

import { $SELECTCOMP, $BOARDCOMP } from "../reducers/editor";

const SELECTCOMP = "SELECTCOMP";
const BOARDCOMP = "BOARDCOMP";

interface Payload {
  [key: string]: any;
}

export const selectCurrentComp = createAction(SELECTCOMP);
export const changeBoardComps = createAction(BOARDCOMP);

const selectCompsEpic = (action$: Observable<any>, state$) =>
  action$.pipe(
    ofType(SELECTCOMP),
    mergeMap((action: Action<Payload>, index) =>
      of($SELECTCOMP(action.payload))
    )
  );

const boardCompsEpic = (action$, state$) =>
  action$.pipe(
    ofType(BOARDCOMP),
    mergeMap((action: Action<Payload>, index) => of($BOARDCOMP(action.payload)))
  );

export default [selectCompsEpic, boardCompsEpic];
