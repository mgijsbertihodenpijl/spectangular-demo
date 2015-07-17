/* globals protractor, browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'https://material.angularjs.org/latest/#/demo/material.components.bottomSheet';
Spectangular.library = SpectangularMdLibrary;

describe('Spectangular demo buttons', function () {

  beforeEach(function () {
    //Loads the page https://material.angularjs.org/latest/#/demo/material.components.button and waits for the element
    // with css selector .demo-toolbar.
    Spectangular.loadPage('', '.demo-toolbar');
  });

  it('should open Show as list with selector', function () {
    Spectangular.button({ selector: '[ng-click=\"showListBottomSheet($event)\"]'}).click();
    browser.sleep(2000);
  });

  it('should open Show as list with text', function () {
    Spectangular.button({ text: 'Show as list'}).click();
    browser.sleep(2000);
  });
}
});