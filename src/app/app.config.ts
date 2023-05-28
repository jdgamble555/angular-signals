import { ApplicationConfig } from '@angular/core';
import { Route, provideRouter } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SignalsComponent } from './signals/signals.component';

export const routes: Route[] = [{
  path: 'rxjs',
  component: RxjsComponent
}, {
  path: '',
  component: SignalsComponent
}];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
