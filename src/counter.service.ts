import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root', // Permet à Angular de fournir ce service globalement
})
export class CounterService {
  // Signal : Représente la valeur actuelle du compteur
  private count = signal(0);

  public var = 10;
  getVar() {
    return this.var;
  }

  // Computed : Représente le double de la valeur du compteur
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    // Effect : S'exécute automatiquement chaque fois que `count` change
    effect(() => {
      console.log(`Le compteur a changé : ${this.count()}`);
    });
    setTimeout(() => {
      this.count.update((value) => value + 1); // Déclenche à nouveau l'effet
    }, 1000);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        this.var = json.title;
      });
  }

  // Méthode pour obtenir la valeur actuelle du compteur
  getCount() {
    return this.count();
  }

  // Méthode pour incrémenter le compteur
  increment() {
    this.count.update((value) => value + 1);
  }

  // Méthode pour décrémenter le compteur
  decrement() {
    this.count.update((value) => value - 1);
  }

  // Méthode pour définir une nouvelle valeur pour le compteur
  setCount(newCount: number) {
    this.count.set(newCount);
  }
}

/* EXEMPLE HTML :
  <h1>Compteur</h1>
  <p>Valeur actuelle : {{ counterService.getCount() }}</p>
  <p>Double de la valeur : {{ counterService.doubleCount() }}</p>
  <button (click)="counterService.increment()">Incrémenter</button>
  <button (click)="counterService.decrement()">Décrémenter</button>
*/

/* EXEMPLE DE APP :
import { Component } from '@angular/core';
import { } from '@angular/common';
import { CounterService } from './effect.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public counterService : CounterService ) {}
}
*/
