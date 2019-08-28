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

/* Set to false for app mode */
const TEST_MODE = true;




if (TEST_MODE) {
  bootstrapJasmine()
} else {
  bootstrapAngular();
}

function bootstrapAngular() {
    platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
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

  // initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}