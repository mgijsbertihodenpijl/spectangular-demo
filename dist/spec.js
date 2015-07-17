/* globals protractor, browser, describe, it, element, by, expect, beforeEach */
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _node_modulesSpectangularDistSpectangularJs = require('../node_modules/spectangular/dist/spectangular.js');

var _node_modulesSpectangularDistSpectangularJs2 = _interopRequireDefault(_node_modulesSpectangularDistSpectangularJs);

var _node_modulesSpectangularDistLibrariesMdMdJs = require('../node_modules/spectangular/dist/libraries/md/md.js');

var SpectangularMdLibrary = _interopRequireWildcard(_node_modulesSpectangularDistLibrariesMdMdJs);

_node_modulesSpectangularDistSpectangularJs2['default'].baseUrl = 'https://material.angularjs.org/latest/#/demo/material.components.bottomSheet';
_node_modulesSpectangularDistSpectangularJs2['default'].library = SpectangularMdLibrary;

describe('Spectangular demo buttons', function () {

  beforeEach(function () {
    //Loads the page https://material.angularjs.org/latest/#/demo/material.components.button and waits for the element
    // with css selector .demo-toolbar.
    _node_modulesSpectangularDistSpectangularJs2['default'].loadPage('', '.demo-toolbar');
  });

  it('should click on the Show as list with selector', function () {
    _node_modulesSpectangularDistSpectangularJs2['default'].button({ selector: '[ng-click="showListBottomSheet($event)"]' }).click();
    _node_modulesSpectangularDistSpectangularJs2['default'].button({ text: 'Show as list' }).click();
    browser.sleep(2000);
  });
});
