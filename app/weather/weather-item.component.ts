import { IWeather } from './weather';
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'we-item',
    templateUrl: 'weather-item.component.html'
})

export class WeatherItemComponent {

    @Input('item') weatherItem: IWeather;
    constructor() { }

}