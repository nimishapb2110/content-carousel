import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Theme, blueTheme, whiteTheme } from '../shared/theme.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleTheme = new EventEmitter<Theme>();
  blueTheme: Theme = blueTheme;
  whiteTheme: Theme = whiteTheme;
  selectedTheme: Theme = blueTheme;
  blueThemeSelectedFlag = true;
  constructor() { }

  ngOnInit() {
  }

  setTheme( themeName: Theme ) {
   if ( this.selectedTheme !== themeName ) {
    this.selectedTheme = themeName;
    this.toggleTheme.emit(themeName);
    this.blueThemeSelectedFlag = !this.blueThemeSelectedFlag;
   }
  }
}
