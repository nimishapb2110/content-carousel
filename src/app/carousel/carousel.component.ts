import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CarouselModel } from './carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() carouselDataList: Array<CarouselModel>;
  currentIndex = 0;
  currentSelection: CarouselModel;
  constructor() { 
   
  }

  ngOnInit() {
    
  }

  ngOnChanges(){
    if(this.carouselDataList)
      this.currentSelection = this.carouselDataList[this.currentIndex];
  }

  showNext(nextFlag: boolean) {
    if (nextFlag) {
      if (this.currentIndex + 1 === this.carouselDataList.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = this.currentIndex + 1;
      }
    } else {
      if (this.currentIndex === 0) {
        this.currentIndex = this.carouselDataList.length - 1;
      } else {
        this.currentIndex = this.currentIndex - 1;
      }
    }
    if (this.currentIndex < this.carouselDataList.length) {
      this.currentSelection = this.carouselDataList[this.currentIndex];
    }
  }
}
