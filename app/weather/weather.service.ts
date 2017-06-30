import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/throw";

import { IWeather } from './weather';
import { WEATHER_ITEMS } from './weather.data';
import { URL, KEY, IMP } from './api';

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
            `${this._url}${cityName}&APPID=${this._key}${this._imp}`
        )
            .map((res: Response) => <IWeather[]> res.json())
            .do(res => console.log('Weather Data Object: ', JSON.stringify(res)))
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }

}