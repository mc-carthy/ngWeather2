import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from './weather.service';
import { IWeather } from './weather';

@Component({
    moduleId: module.id,
    selector: 'we-search',
    templateUrl: 'weather-search.component.html'
})

export class WeatherSearchComponent implements OnInit {

    searchInput: FormControl = new FormControl('');
    city: any = {};
    
    constructor(
        private weatherService: WeatherService
    ) { }

    ngOnInit() {
        this.searchInput.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap((input: string) => 
                this.weatherService.searchWeatherData(input))
                    .subscribe(
                        city => this.city = city,
                        err => {
                            console.error(`Can't get weather. Error code ${err.cod}, Message ${err.message}`);
                            console.error(err);
                        }
                    );
    }

    onSubmit()
    {
        const weatherItem: IWeather = {
            cityName: this.city.name,
            description: this.city.weather[0].description,
            temperature: this.city.main.temp
        };
        console.log(weatherItem);
        this.addWeatherItem(weatherItem);
    }

    addWeatherItem(weatherItem: IWeather)
    {
        this.weatherService.addWeatherItem(weatherItem);
        this.searchInput.reset();
    }
}