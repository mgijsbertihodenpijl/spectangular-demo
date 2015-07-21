//using ng-model form ng-model data.cb1 ... data.cb5 checkboxes
//using sync check syncing
/* globals browser, describe, it, element, by, expect, beforeEach */
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _node_modulesSpectangularDistSpectangularJs = require('../node_modules/spectangular/dist/spectangular.js');

var _node_modulesSpectangularDistSpectangularJs2 = _interopRequireDefault(_node_modulesSpectangularDistSpectangularJs);

var _node_modulesSpectangularDistLibrariesMdMdJs = require('../node_modules/spectangular/dist/libraries/md/md.js');

var SpectangularMdLibrary = _interopRequireWildcard(_node_modulesSpectangularDistLibrariesMdMdJs);

_node_modulesSpectangularDistSpectangularJs2['default'].baseUrl = 'https://material.angularjs.org/latest';
var location = '/#/demo/material.components.checkbox';
_node_modulesSpectangularDistSpectangularJs2['default'].library = SpectangularMdLibrary;

describe('Demo of checkboxes', function () {

  /**
   * Loads the page https://material.angularjs.org/latest/#/demo/material.components.checkbox and waits for the element
   * with css selector h2.md-toolbar-item.
   */
  beforeEach(function () {
    _node_modulesSpectangularDistSpectangularJs2['default'].loadPage(location, 'h2.md-toolbar-item');
  });

  /**
   * The first checkbox is selected. The selector is an unique css selector based on the ng-model attribute.
   * The setValue method takes care of the click. The checkbox is clicked and validates if the click has activated
   * the checkbox.
   */
  it('should use selector to select and click on checkbox', function () {
    var cbSelector = '[ng-model="data.cb1"]';
    _node_modulesSpectangularDistSpectangularJs2['default'].checkbox({ selector: cbSelector }).setValue(true);
    browser.sleep(2000);
  });

  /**
   * The second checkbox is selected. The selector is an unique css selector based on the ng-model attribute.
   * The setValue method takes care of the click. The checkbox is clicked and validates if the click has activated
   * the checkbox.
   */
  it('should use selector to select and click on checkbox #2', function () {
    var cbSelector = '[ng-model="data.cb2"]';
    _node_modulesSpectangularDistSpectangularJs2['default'].checkbox({ selector: cbSelector }).setValue(true);
    browser.sleep(2000);
  });

  /**
   * For a group of field in a container, a JSON object can be used to configure the form.
   *
   */
  it('should use form data to select and click on checkboxes', function () {
    //The form selector should be unique. If not, the first form is used.
    var formSelector = '.checkboxDemo1';
    var formData = [{ model: 'data.cb1', value: true, type: 'checkbox' }, { model: 'data.cb2', value: true, type: 'checkbox' }, { model: 'data.cb5', value: true, type: 'checkbox' }];

    _node_modulesSpectangularDistSpectangularJs2['default'].form({
      selector: formSelector,
      data: formData
    });
    browser.sleep(2000);
  });
});
