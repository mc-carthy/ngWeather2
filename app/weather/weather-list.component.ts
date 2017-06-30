import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { IWeather } from './weather';

@Component({
    moduleId: module.id,
    selector: 'we-list',
    templateUrl: 'weather-list.component.html'
})

export class WeatherListComponent implements OnInit {

    weatherItems: IWeather[];

    constructor(
        private weatherService: WeatherService
    ) { }

    ngOnInit() {
        this.getWeatherItems();
    }

    getWeatherItems(): void
    {
        this.weatherItems = this.weatherService.getWeatherItems();
    }
}