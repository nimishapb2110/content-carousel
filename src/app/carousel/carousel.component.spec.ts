import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { CarouselComponent } from './carousel.component';
import { CarouselModel } from './carousel.model';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ]
    })
    .compileComponents();
  }));

  const dummyDataList: CarouselModel[] =  [
    { 'src': 'destination1.png', title: 'Destination A', description: 'Sample description A' },
    { 'src': 'destination2.png', title: 'Destination B', description: 'Sample description B' }
  ];

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    const destinationObservable: Observable<CarouselModel[]> = of(dummyDataList);
    component.carouselDataList$ = destinationObservable;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the count by one', () => {
    component.currentIndex = 0;
    component.showNext();
    expect(component.currentIndex).toEqual(1);
  });

  it('should decrement the count by one', () => {
    component.currentIndex = 1;
    component.showNext();
    expect(component.currentIndex).toEqual(0);
  });

  it('should set the current index back to 0', () => {
    component.currentIndex = 1;
    component.showPrevious();
    expect(component.currentIndex).toEqual(0);
  });

  it('should set the current index to the index of last data', () => {
    component.currentIndex = 0;
    component.showPrevious();
    expect(component.currentIndex).toEqual(1);
  });

});
