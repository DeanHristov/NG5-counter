import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';

export interface AppState {
    counter: fromCounter.CounterState;
}

export const rootReducer: ActionReducerMap<AppState> = {
    counter: fromCounter.countReducer
}
