
import { inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';


import { imageData } from './iplabs/imageData';
import { ImageLoader } from './iplabs/imageLoader';

import { ImageService } from './imageService';

describe('ImageService', () => {  
  let service: ImageService;

  beforeEach(async (() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule
        ],
        providers: [
          ImageService
        ]
      }).compileComponents();
  }));

  beforeEach(() => {
      service = TestBed.get(ImageService);
  })

  it('first test schould be true', () => {
    expect(service.imagesLoaded$.getValue()).toBeFalsy();

  });

});