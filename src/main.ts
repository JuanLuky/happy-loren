import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import 'zone.js';
import { register as registerSwiperElements } from 'swiper/element/bundle';




bootstrapApplication(AppComponent, {
  providers: [provideAnimationsAsync()]

})
.catch((err) => console.error(err));

registerSwiperElements();
