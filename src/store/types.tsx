export const GET_WEATHER ='GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface weatherData {
    base: string;
    cloud: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrice: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: weather[];
    wind: {
        speed: number;
        deg: number;
    };
}

export interface weatherError {
    cod: string;
    message: string;
}

export interface weatherState {
    data: weatherData  | null;
    loading: boolean;
    error: string;
}

interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: weatherData;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type weatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string;
}


