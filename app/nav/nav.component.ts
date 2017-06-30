import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'we-nav',
  templateUrl: 'nav.template.html'
})

export class NavbarComponent {
  appName: string = "ngWeather";
}
