import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {MusicWorkshopApp} from './app/music-workshop';

if (environment.production) {
  enableProdMode();
}

bootstrap(MusicWorkshopApp);
