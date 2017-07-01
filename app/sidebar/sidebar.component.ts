import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { WeatherService } from './../weather/weather.service';
import { IProfile } from './profile';
import { IWeather } from './../weather/weather';

@Component({
    moduleId: module.id,
    selector: 'we-sidebar',
    templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit {

    profiles: IProfile[];
    weatherItem: IWeather[];
    newProfile: IProfile = {
        profileName: '',
        city: ''
    };

    constructor(
        private profileService: ProfileService,
        private weatherService: WeatherService
    ) { }

    ngOnInit() {
        this.profiles = this.getProfiles();
    }

    getProfiles(): IProfile[] {
        return this.profileService.getProfiles();
    }

    onSaveNew() {
        const profileItem: IProfile = {
            profileName: this.newProfile.profileName,
            city: this.newProfile.city
        };
        this.saveProfile(profileItem)
    }

    saveProfile(profileItem: IProfile) {
        this.profileService.saveNewProfile(profileItem);
        this.newProfile.profileName = '';
        this.newProfile.city = '';
    }

    onLoadProfile(profile: IProfile) {
        this.weatherService.searchWeatherData(profile.city)
            .subscribe(
                data => this.weatherItem = data
            );
    }

    onDeleteProfile($event: Event, profile: IProfile) {
        event.stopPropagation();
        this.profileService.deleteProfile(profile);
    }

}