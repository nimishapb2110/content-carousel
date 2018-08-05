import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  blueThemeSelectedFlag = true;
  onThemeChange( blueThemeFlag ) {
    this.blueThemeSelectedFlag = blueThemeFlag;
  }
}
