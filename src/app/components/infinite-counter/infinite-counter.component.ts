import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-counter',
  imports: [],
  templateUrl: './infinite-counter.component.html',
  styleUrl: './infinite-counter.component.scss'
})
export class InfiniteCounterComponent implements OnInit, OnDestroy {
  startDate = new Date('2014-02-25T00:00:00'); // Data inicial
  currentDate = new Date(); // Data atual
  years = 0; // Anos
  days = 0; // Dias restantes
  hours = '00'; // Horas
  minutes = '00'; // Minutos
  seconds = '00'; // Segundos
  interval: any;

  ngOnInit(): void {
    this.calculateTime();
    this.interval = setInterval(() => {
      this.currentDate = new Date(); // Atualiza a data atual
      this.calculateTime();
    }, 1000); // Atualiza a cada segundo
  }

  calculateTime(): void {
    const diff = this.currentDate.getTime() - this.startDate.getTime(); // Diferença em milissegundos

    const diffInSeconds = Math.floor(diff / 1000);
    this.years = Math.floor(diffInSeconds / (365 * 24 * 60 * 60)); // Converte segundos para anos
    const remainingSecondsAfterYears = diffInSeconds % (365 * 24 * 60 * 60);

    this.days = Math.floor(remainingSecondsAfterYears / (24 * 60 * 60)); // Dias restantes
    const remainingSecondsAfterDays = remainingSecondsAfterYears % (24 * 60 * 60);

    const rawHours = Math.floor(remainingSecondsAfterDays / (60 * 60)); // Horas
    const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);

    const rawMinutes = Math.floor(remainingSecondsAfterHours / 60); // Minutos
    const rawSeconds = remainingSecondsAfterHours % 60; // Segundos

    // Formatar horas, minutos e segundos com zero à esquerda
    this.hours = this.formatWithZero(rawHours);
    this.minutes = this.formatWithZero(rawMinutes);
    this.seconds = this.formatWithZero(rawSeconds);
  }

  formatWithZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval); // Limpa o intervalo ao destruir o componente
  }
}
