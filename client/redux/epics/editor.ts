import { interval, of } from "rxjs";
import { takeUntil, mergeMap, catchError, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { createAction, Action } from "redux-actions";

import { $SELECTCOMP } from "../reducers/editor";

const SELECTCOMP = "SELECTCOMP";

interface Payload {
  compData: any;
}

export const selectCurrentComp = createAction(SELECTCOMP);

const fetchADD = (action$, state$) =>
  action$.pipe(
    ofType(SELECTCOMP),
    mergeMap((action: Action<Payload>, index) =>
      of($SELECTCOMP(action.payload))
    )
  );

export default [fetchADD];
