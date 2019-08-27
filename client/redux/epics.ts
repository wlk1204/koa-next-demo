import { interval, of } from 'rxjs'
import { takeUntil, mergeMap, catchError, map  } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'

import * as actions from './actions'
import * as types from './actionTypes'

export const fetchADD = (action$, state$) =>
  action$.pipe(
    ofType(types._ADD),
    mergeMap((action) =>
      of(actions.add()),
    ),
  )

export const fetchLOW = (action$, state$) =>
  action$.pipe(
    ofType(types._LOW),
    mergeMap((action) =>
      of(actions.low()),
    ),
  )

export const fetchStartAdd = (action$, state$) =>
  action$.pipe(
    ofType(types._START),
    mergeMap((action) => {
      return interval(1000).pipe(
        map((x) => actions.start()),
        takeUntil(
          action$.ofType(
            types._END,
          ),
        ),
      )
    }),
  )

export const rootEpic = combineEpics(fetchADD, fetchLOW, fetchStartAdd)
