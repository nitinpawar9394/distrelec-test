import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import slidesData from './../data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slideData: any;
  constructor() {
    this.slideData = slidesData;
  }
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoHeight: false,
    dots: false,
    navSpeed: 600,
    navText: ['❮', '❯'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 4
      },
      900: {
        items: 4
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
}