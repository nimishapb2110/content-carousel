import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() blueThemeSelectedFlag;
  @Output() themeFlagChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  setTheme(selectedFlag) {
    this.blueThemeSelectedFlag = selectedFlag;
    this.themeFlagChange.emit(this.blueThemeSelectedFlag);
  }
}
