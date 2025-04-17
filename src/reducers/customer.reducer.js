import { constants } from '../constants';

const initialState = {
    customer: {},
    loading: true 
};

export function customer(state = initialState, action) {
    switch (action.type) {
        case constants.REQUEST:
            return {
                ...state,
                loading: action.value
            };       
        default: return state
    }
}
