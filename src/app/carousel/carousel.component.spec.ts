import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { CarouselModel } from './carousel.model';

fdescribe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const dummyDataList: Array<CarouselModel> =  [
    { 'src': '', title: 'A', description: '' },
    { 'src': '', title: 'B', description: '' }
  ];

  it('should increment the count by one', () => {
    component.carouselDataList = dummyDataList;
    component.currentIndex = 0;
    component.showNext();
    expect(component.currentIndex).toEqual(1);
  });

  it('should decrement the count by one', () => {
    component.carouselDataList = dummyDataList;
    component.currentIndex = 1;
    component.showNext();
    expect(component.currentIndex).toEqual(0);
  });

  it('should set the current index back to 0', () => {
    component.carouselDataList = dummyDataList;
    component.currentIndex = 1;
    component.showPrevious();
    expect(component.currentIndex).toEqual(0);
  });

  it('should set the current index to the index of last data', () => {
    component.carouselDataList = dummyDataList;
    component.currentIndex = 0;
    component.showPrevious();
    expect(component.currentIndex).toEqual(1);
  });

});
