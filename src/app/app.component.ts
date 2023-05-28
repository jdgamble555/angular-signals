import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <router-outlet />
  <p></p>
  <ng-container *ngIf="this.isSignal | async else rxjs">
    <p><a routerLink="/rxjs">See Rxjs Version</a></p>
  </ng-container>
  <ng-template #rxjs>
    <p><a routerLink="/">See Signal Version</a></p>
  </ng-template>
  `
})
export class AppComponent {

  router = inject(Router);

  isSignal = this.router.events.pipe(
    filter((event): event is NavigationStart => event instanceof NavigationStart),
    map((event) => event.url === '/')
  );

}
