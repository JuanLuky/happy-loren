import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audio = new Audio();

  constructor() {
    // this.audio.src = '/assets/luansantana.mp3'; // Caminho do arquivo de música
    this.audio.src = '/assets/music.mp3'; // Caminho do arquivo de música
    this.audio.load();
    this.audio.loop = true; // Repetir a música
  }

  play() {
    this.audio.play().catch(error => console.error('Erro ao reproduzir áudio:', error));
  }

  pause() {
    this.audio.pause();
  }
}
