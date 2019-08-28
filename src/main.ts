import '../test/jasmine-setup';
import './polyfills';

import { PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { AppModule } from './app/app.module';

/* Set to true for testing mode */
const TEST_MODE = false;




if (TEST_MODE) {
  bootstrapJasmine()
} else {
  bootstrapAngular();
}

let platformRef: PlatformRef;
let testingRef: PlatformRef;

function bootstrapAngular() {
    if(testingRef) {
      testingRef.destroy();
    } 
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
  testingRef = platformBrowserDynamicTesting();
  // initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    testingRef
  );
}