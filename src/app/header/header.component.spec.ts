import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle selection flag to false', inject([], () => {
    component.setWhiteTheme();
    expect(component.blueThemeSelectedFlag).toBe(false);
  }));

  it('should toggle selection flag to true', inject([], () => {
    component.setBlueTheme();
    expect(component.blueThemeSelectedFlag).toBe(true);
  }));
});
