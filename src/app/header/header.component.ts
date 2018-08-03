import { Component } from '@angular/core';
import { blueTheme, whiteTheme } from '../shared/theme.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  blueThemeSelectedFlag = true;

  setBlueTheme() {
    document.documentElement.style.setProperty('--primary', blueTheme.primary);
    document.documentElement.style.setProperty('--accent', blueTheme.primary);
    this.blueThemeSelectedFlag = true;
  }

  setWhiteTheme() {
    document.documentElement.style.setProperty('--primary', whiteTheme.primary);
    document.documentElement.style.setProperty('--accent', whiteTheme.accent);
    this.blueThemeSelectedFlag = false;
  }
}
