import { interval, of } from 'rxjs'
import { takeUntil, mergeMap, catchError, map  } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import * as actions from '../actions'
import * as types from '../actionTypes'

const fetchADD = (action$, state$) =>
  action$.pipe(
    ofType(types._ADD),
    mergeMap((action) =>
      of(actions.add()),
    ),
  )

const fetchLOW = (action$, state$) =>
  action$.pipe(
    ofType(types._LOW),
    mergeMap((action) =>
      of(actions.low()),
    ),
  )

const fetchStartAdd = (action$, state$) =>
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

export default [
  fetchADD,
  fetchLOW,
  fetchStartAdd,
]
