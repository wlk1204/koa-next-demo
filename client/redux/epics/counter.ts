import { interval, of } from "rxjs";
import { takeUntil, mergeMap, catchError, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { createAction } from "redux-actions";

import {
  $increment,
  $decrement,
  $autoIncrement,
  $autoStop,
} from "../reducers/counter";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const AUTOINCREMENT = "AUTOINCREMENT";
const STOPINCREMENT = "STOPINCREMENT";

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const autoIncrement = createAction(AUTOINCREMENT);
export const autoStop = createAction(STOPINCREMENT);

const fetchADD = (action$, state$) =>
  action$.pipe(
    ofType(INCREMENT),
    mergeMap((action, index) => {
      return of($increment());
    })
  );

const fetchLOW = (action$, state$) =>
  action$.pipe(
    ofType(DECREMENT),
    mergeMap((action) => of($decrement()))
  );

const fetchStartAdd = (action$, state$) =>
  action$.pipe(
    ofType(AUTOINCREMENT),
    mergeMap((action) => {
      return interval(1000).pipe(
        map((x) => $autoIncrement()),
        takeUntil(action$.ofType(STOPINCREMENT))
      );
    })
  );

export default [fetchADD, fetchLOW, fetchStartAdd];
