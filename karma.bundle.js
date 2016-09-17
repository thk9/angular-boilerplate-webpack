/**
 * @description - karma test entry
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

// import deps package, when install additional package, must declare here
import 'angular';
import 'angular-mocks';
import 'angular-animate';
import 'angular-bootstrap';
import 'angular-ui-router';

// none standard es6 module package
import 'lodash';

// resolve all application files
import './src/app';

angular.module('AppMirror', ['App', 'ngMock']);

// resolve test spec files
//
// We use the context method on `require` which Webpack created
// in order to signify which files we actually want to require or import.
// Below, `context` will be a/an function/object with file names as keys.
// Using that regex, we scan within `client/app` and target
// all files ending with `.spec.js` and trace its path.
// By passing in true, we permit this process to occur recursively.
//
let context = require.context('./src/share', true, /\.spec\.js/);

// Get all files, for each file, call the context function
// that will require the file and load it here. Context will
// loop and require those spec files here.
context.keys().forEach(context);