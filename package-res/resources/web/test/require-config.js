var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/Spec\.js$/).test(file);
});

pen = {};
pen.require = function() {
    return require.apply(this, arguments);
} 
pen.define = function() {
    return define.apply(this, arguments);
}

requirejs.config({

  baseUrl: 'base/app',
  paths: {
    'common-ui/angular': 'lib/provided/common-ui/resources/web/angular/angular',
    'common-ui/angular-resource': 'lib/provided/common-ui/resources/web/angular/angular-resource',
    'common-ui/angular-route': 'lib/provided/common-ui/resources/web/angular/angular-route',
    'common-ui/angular-ui-bootstrap': 'lib/provided/common-ui/resources/web/bootstrap/ui-bootstrap-tpls-0.6.0.min',
    'angular-mocks': 'lib/provided/common-ui/resources/web/angular/angular-mocks',
    'angular-scenario': 'lib/provided/common-ui/resources/web/angular/angular-scenario',

    'common-ui/PluginHandler': 'lib/provided/common-ui/resources/web/plugin-handler/pluginHandler',
    'common-ui/Plugin': 'lib/provided/common-ui/resources/web/plugin-handler/plugin',
    'common-ui/AngularPluginHandler': 'lib/provided/common-ui/resources/web/plugin-handler/angularPluginHandler',
    'common-ui/AngularPlugin': 'lib/provided/common-ui/resources/web/plugin-handler/angularPlugin',
    'common-ui/AnimatedAngularPluginHandler': 'lib/provided/common-ui/resources/web/plugin-handler/animatedAngularPluginHandler',
    'common-ui/AnimatedAngularPlugin': 'lib/provided/common-ui/resources/web/plugin-handler/animatedAngularPlugin',

    'common-ui/angular-animate': 'lib/provided/common-ui/resources/web/angular/angular-animate',
    'common-ui/jquery': 'lib/provided/common-ui/resources/web/jquery/jquery-1.9.1.min',
    'common-ui/ring': 'lib/provided/common-ui/resources/web/ring/ring',
    'underscore': 'lib/provided/common-ui/resources/web/underscore/underscore',

    '_sample_': 'js'
  },

  shim: {
    'common-ui/angular': { exports: 'angular' },
    'common-ui/angular-resource': { deps: ['common-ui/angular'], exports: 'Resource' },
    'common-ui/angular-route': { deps: ['common-ui/angular'], exports: 'Route' },
    'common-ui/angular-ui-bootstrap': { deps: ['common-ui/angular'] },
    'angular-mocks': { deps: ['common-ui/angular-resource'] },
    
    'common-ui/jquery': { exports: '$' },
    'common-ui/PluginHandler': { deps: ['common-ui/jquery'] },
    'common-ui/angular-animate': { deps: ['common-ui/angular'] },
    'underscore': { exports: '_' },
    'common-ui/ring': { deps: ['underscore'], exports: 'ring' }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: function() {
    window.__karma__.start();
  }
});
