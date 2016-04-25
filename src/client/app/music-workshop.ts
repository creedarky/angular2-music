import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {AlbumsPageComponent} from './albums-page/index'

@Component({
  moduleId: __moduleName,
  selector: 'music-workshop-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'music-workshop.html',
  styleUrls: ['music-workshop.css'],
  directives: [ROUTER_DIRECTIVES, AlbumsPageComponent],
  pipes: []
})
@RouteConfig([
])
export class MusicWorkshopApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
