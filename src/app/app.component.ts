import { Component, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Theme, blueTheme } from './shared/theme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  theme: Theme = blueTheme;

  constructor( private sanitizer: DomSanitizer ) { }

  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--primary: ${this.theme.primary}; --accent: ${this.theme.accent}`
    );
  }

  onToggleTheme( selectedTheme: Theme ) {
    this.theme = selectedTheme;
  }
}
