import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfiniteCounterComponent } from './components/infinite-counter/infinite-counter.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from "./components/slider/slider.component";
import { AudioService } from './service/audio.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfiniteCounterComponent, HomeComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Happy Loren';

  private audioService = inject(AudioService);
  isPlaying = false; // Indica se a música está tocando

  constructor() {
    this.playMusic(); // Toca a música ao carregar
  }

  playMusic() {
    this.audioService.play();
    this.isPlaying = true;
  }

  toggleMusic() {
    this.isPlaying ? this.audioService.pause() : this.audioService.play();
    this.isPlaying = !this.isPlaying;
  }
}
