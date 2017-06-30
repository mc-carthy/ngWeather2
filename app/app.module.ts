import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';

import { WeatherSearchComponent } from './weather/weather-search.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherItemComponent } from './weather/weather-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { WeatherService } from './weather/weather.service';

import './shared/rxjs-extensions';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        WeatherSearchComponent,
        WeatherListComponent,
        WeatherItemComponent,
        SidebarComponent
    ],
    providers: [
        WeatherService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }