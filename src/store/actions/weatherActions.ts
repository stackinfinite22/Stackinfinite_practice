import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { weatherAction, weatherData, weatherError, GET_WEATHER, SET_LOADING, SET_ERROR } from '../types';

export const getWeather = (city: string): ThunkAction<void, RootState, null, weatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);

      if(!res.ok) {
        const resData: weatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: weatherData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData
      });
    }catch(err:any) {
      dispatch({
        type: SET_ERROR,
        payload: err.message
        
      });
    }
  }
}

export const setLoading = (): weatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): weatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}