import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <p>{{ x2() }}</p>
  <button (click)="increment()">Double</button>
  `
})
export class AppComponent {
  title = 'angular-signals';

  readonly x = signal(1);
  readonly x2 = computed(() => this.x() * 2);

  increment() {
    this.x.update((x) => ++x);
  }
}
