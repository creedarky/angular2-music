import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AlbumsPageComponent} from './albums-page/index'
import {TracksPageComponent} from "./tracks-page/tracks-page.component";

@Component({
  moduleId: __moduleName,
  selector: 'music-workshop-app',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
  templateUrl: 'music-workshop.html',
  styleUrls: ['music-workshop.css'],
  directives: [ROUTER_DIRECTIVES, AlbumsPageComponent],
  pipes: []
})
@RouteConfig([
  {path: '/', component: AlbumsPageComponent, name:'AlbumsPage'},
  {path: '/:id', component: TracksPageComponent, name:'TracksPage'},
])
export class MusicWorkshopApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
