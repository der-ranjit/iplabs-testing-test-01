import './polyfills';
import '../test/jasmine-setup';

import { PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { AppModule } from './app/app.module';

/* Set to true for testing mode */
const TEST_MODE = true;




if (TEST_MODE) {
  bootstrapJasmine()
} else {
  bootstrapAngular();
}

let platformRef: PlatformRef;

function bootstrapAngular() {
    if(platformRef) {
      platformRef.destroy();
    } 
    platformRef = platformBrowserDynamic();
    platformRef.bootstrapModule(AppModule).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  }).catch(err => console.error(err));
}

function bootstrapJasmine() {
  if (window.jasmineRef) {
    location.reload();

    return;
  }

  window.onload(new Event('anything'));
  window.jasmineRef = jasmine.getEnv();

  if(platformRef) {
    platformRef.destroy();
  } 
  platformRef = platformBrowserDynamic();
  if (platformRef) {
    // initialize the Angular testing environment.
    getTestBed().initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  }
}