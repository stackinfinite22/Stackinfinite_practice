import { weatherState, weatherAction, GET_WEATHER, SET_LOADING, SET_ERROR } from '../types'

const initialState: weatherState ={
    data: null,
    loading: false,
    error: ''
}

export default (state = initialState, action: weatherAction): weatherState => {
    switch(action.type) {
        case GET_WEATHER:
            return {
                data: action.payload,
                loading: false,
                error: ''
            }

            case  SET_LOADING:
                return {
                    ...state,
                    loading: true
                }
            case SET_ERROR:
                return {
                    ...state,
                    error: action.payload,
                    loading: false
                }
                    dfault:
                    return state;
            }
}