import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfiniteCounterComponent } from './components/infinite-counter/infinite-counter.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from "./components/slider/slider.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfiniteCounterComponent, HomeComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Happy Loren';
}
