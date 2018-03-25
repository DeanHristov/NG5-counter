import { Action } from '@ngrx/store';

export const COUNTER_INCREMENT = '[COUNTER]: Increment';
export const COUNTER_DECREMENT = '[COUNTER]: Decrement';
export const COUNTER_RESET     = '[COUNTER]: Reset';


export class Increment implements Action {
    readonly type = COUNTER_INCREMENT;
    constructor (public payload: any) {}
}


export class Decrement implements Action {
    readonly type = COUNTER_DECREMENT;
    constructor (public payload: any) {}
}


export class Reset implements Action {
    readonly type = COUNTER_RESET;
    constructor (public payload: any) {}
}

// Export action types
export type counterAction = Increment | Decrement | Reset;
