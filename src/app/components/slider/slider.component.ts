import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  template: `

    <div class="container">
      <swiper-container>
        <swiper-slide><img src="/assets/image/1.jpg" /></swiper-slide>
        <swiper-slide><img src="/assets/image/3.jpg" /></swiper-slide>
        <swiper-slide><img src="/assets/image/4.jpg" /></swiper-slide>
        <swiper-slide><img src="/assets/image/7.jpg" /></swiper-slide>
        <swiper-slide><img src="/assets/image/9.jpg" /></swiper-slide>
        <swiper-slide><img src="/assets/image/10.jpg" /></swiper-slide>
        <swiper-slide><img src="/assets/image/11.jpg" /></swiper-slide>
      </swiper-container>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 0px;
        width: 100% !important;
        max-width: 340px !important;
        margin: 20px auto 40px auto;
        box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
      }
      swiper-slide {
        height: 400px;
        width: 100%;
      }
      swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    `,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent {}
