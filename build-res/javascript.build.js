/*
 * requirejs configuration file
 * used for both builds
 */

({
  appDir: "./module-scripts/app",
//  optimize: "uglify2", is defined via the build command
  optimizeCss: "none",
  baseUrl: ".",
  dir: "../bin/scriptOutput",
  paths: {
    requireLib: '../package-res/resources/web/app/lib/common-ui/resources/web/require',
    'common-ui/jquery': '../lib/provided/common-ui/resources/web/jquery/jquery-1.9.1.min',
    'common-ui/angular': '../lib/provided/common-ui/resources/web/angular/angular',
    'common-ui/angular-resource': '../lib/provided/common-ui/resources/web/angular/angular-resource',
    'common-ui/angular-route': '../lib/provided/common-ui/resources/web/angular/angular-route',
    'common-ui/angular-ui-bootstrap': '../lib/provided/common-ui/resources/web/bootstrap/ui-bootstrap-tpls-0.6.0.min',

    'common-ui/PluginHandler': '../lib/provided/common-ui/resources/web/plugin-handler/pluginHandler',
    'common-ui/Plugin': '../lib/provided/common-ui/resources/web/plugin-handler/plugin',
    'common-ui/AngularPluginHandler': '../lib/provided/common-ui/resources/web/plugin-handler/angularPluginHandler',
    'common-ui/AngularPlugin': '../lib/provided/common-ui/resources/web/plugin-handler/angularPlugin',
    'common-ui/AnimatedAngularPluginHandler': '../lib/provided/common-ui/resources/web/plugin-handler/animatedAngularPluginHandler',
    'common-ui/AnimatedAngularPlugin': '../lib/provided/common-ui/resources/web/plugin-handler/animatedAngularPlugin',

    'common-ui/angular-animate': '../lib/provided/common-ui/resources/web/angular/angular-animate',
    'common-ui/ring': '../lib/provided/common-ui/resources/web/ring/ring',
    'underscore': '../lib/provided/common-ui/resources/web/underscore/underscore',
    "_sample_": '.'
  },

  shim: {
    'common-ui/angular': { deps: ['common-ui/jquery'], exports: 'angular' },
    'common-ui/angular-resource': { deps: ['common-ui/angular'], exports: 'Resource' },
    'common-ui/angular-route': { deps: ['common-ui/angular'], exports: 'Route' },
    'common-ui/angular-ui-bootstrap': { deps: ['common-ui/angular'] },

    'common-ui/jquery': { exports: '$' },
    'common-ui/PluginHandler': { deps: ['common-ui/jquery'] },
    'common-ui/angular-animate': { deps: ['common-ui/angular'] },
    'underscore': { exports: '_' },
    'common-ui/ring': { deps: ['underscore'], exports: 'ring' }
//    '_sample_/app': { deps: ['app'] }
//    'myApp': { deps: ['_sample_/app'] }

  },

  //generateSourceMaps: true, is defined via the build command 
  //preserveLicenseComments: false, is defined via the build command 

  namespace: "pen",
  
  include: "requireLib",

  uglify2: {
      //Example of a specialized config. If you are fine
      //with the default options, no need to specify
      //any of these properties.
      output: {
          beautify: false
      },
      compress: {
          sequences: false,
          global_defs: {
              DEBUG: false
          }
      },
      warnings: true,
      mangle: true
  },

  modules: [
    {
      name: "main-module",
      include: ["_sample_/app"],
      exclude: [
        'common-ui/jquery', 
        'common-ui/angular', 
        'common-ui/angular-resource', 
        'common-ui/angular-route',
        'common-ui/angular-ui-bootstrap',
        'common-ui/PluginHandler',
        'common-ui/Plugin',
        'common-ui/AngularPluginHandler',
        'common-ui/AngularPlugin',
        'common-ui/AnimatedAngularPluginHandler',
        'common-ui/AnimatedAngularPlugin',
        'common-ui/angular-animate',
        'common-ui/ring',
        'underscore'
      ],
      create: true
    }
  ]
})
