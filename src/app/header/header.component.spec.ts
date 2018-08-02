import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let nativeElement;
  let container: Element;
  let containerNodeList: NodeList;
  let whiteThemeSpan;
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

  it('should emit on click of theme span', inject([], () => {
    spyOn(component.toggleTheme, 'emit');
    nativeElement = fixture.nativeElement;
    container = nativeElement.querySelector('.toggle-wrapper');
    containerNodeList = container.querySelectorAll('span');
    whiteThemeSpan = containerNodeList[1];
    whiteThemeSpan.dispatchEvent(new Event('click'));
    expect(component.toggleTheme.emit).toHaveBeenCalledWith(component.whiteTheme);
  }))
});
