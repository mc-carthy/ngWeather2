import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IWeather } from './weather';
import { WEATHER_ITEMS } from './weather.data';
import { URL, KEY, MET, IMP } from './api';

@Injectable()
export class WeatherService {

    private _url = URL;
    private _key = KEY;
    private _imp = IMP;

    constructor(
        private http: Http
    ) { }

    getWeatherItems()
    {
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: IWeather)
    {
        WEATHER_ITEMS.push(weatherItem);
        console.log(WEATHER_ITEMS);
    }

    searchWeatherData(cityName: string): Observable<IWeather[]>
    {
        return this.http.get(
            `${URL}${cityName}&APPID=${KEY}${MET}`
        )
            .map((res: Response) => <IWeather[]> res.json())
            .do(res => console.log('Weather Data Object: ', JSON.stringify(res)))
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }

}