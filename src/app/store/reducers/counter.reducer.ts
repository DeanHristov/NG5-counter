import {
    COUNTER_INCREMENT, COUNTER_DECREMENT,
    COUNTER_RESET
} from '../actions/counter.action';
import * as counter from '../actions/counter.action';


export interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0
};

export const countReducer = (state: CounterState = initialState, action: counter.counterAction): CounterState => {

    switch(action.type) {
        case COUNTER_INCREMENT: {
            return {
                count: state.count + 1
            };
        }
        case COUNTER_DECREMENT: {
            return{
                count: state.count - 1
            };
        }
        case COUNTER_RESET: {
            return { count: 0 };
        }
    }

    return state;
}
