import {
  beforeEachProviders,
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {AlbumsService} from './albums-service.service';


describe('AlbumsService Service', () => {

  beforeEachProviders(() => [AlbumsService]);
  
  it('should ...', inject([AlbumsService], (service: AlbumsService) => {

  }));

});
