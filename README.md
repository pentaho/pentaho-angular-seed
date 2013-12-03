# Seed Project for an AngularJS plugin into the Pentaho User Console (PUC)

## Overview
This seed project is intended to be used as a starting point for a developer who wants to create a new plugin for the Pentaho BA Server using AngularJS. PUC (as of version 5.1) provides a way to "hook into" it's full-screen-mode with animated screen transitions between views. This seed project is a simple example of how to accomplish this specific task.

## Prerequisites

- Git
- Node.js
- Pentaho BA Server 5.1 (or higher) for plugging into

## Development

### Setup/Usage
1. Clone the seed project locally.
2. Copy the contents of the project into a new folder (excluding the .git folder)
3. Run the unit tests: `ant resolve-js test-js`
4. Try it in standalone mode: see the "Running the app in Standalone mode" section.
5. Initialze a new git repository from it using `git init`.
6. Replace all instances of `_sample_` in all files to some new plugin name of your choosing. That is just a placeholder name for the plugin.
7. Rename this file `package-res/resources/web/app/_sample_-require-js-cfg.js` to reflect that same plugin name.
8. Re-test

#### Pluging into PUC
1. Build an archive of the plugin contents: `ant clean-all clean-js resolve-js package`
2. This will create a zip file in the `dist/` folder. It will be named based on what is configure in the build.properties file. If you haven't customized this yet, it will be this: `dist/_sample_TRUNK-SNAPSHOT.zip`
3. Unzip the contents in to the Pentaho BA Server: `biserver-ee/pentaho-solutions/system/`
4. Start the Pentaho BA Server
5. There are 2 ways to see the plugin in PUC (Login required): The direct URL approach [http://localhost:8080/pentaho/content/_sample_/resources/web/app/index.html#/_sample_App/view1](http://localhost:8080/pentaho/content/_sample_/resources/web/app/index.html#/_sample_App/view1) --OR-- by making use of the PUC Plugin. To do this you will need to open the Javascript Console in your browser. Enter this javascript to show the plugin `pen.openSample()`.

### This project is intended to be able to be run in 3 different modes:
- Standalone mode
-- No dependencies on a running Pentaho BA Server
- Plugin mode
-- Runs from within the Pentaho BA Server
- Test mode
-- Karma unit tests executed and code coverage reports generated

#### Running the app in Standalone mode

1. run `./scripts/web-server.js`
2. navigate your browser to [http://localhost:8000/package-res/resources/web/app/standalone.html#/_sample_App/view1](http://localhost:8000/package-res/resources/web/app/standalone.html#/_sample_App/view1) to see the app running in your browser.

#### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Karma](http://karma-runner.github.io) for your unit tests/specs, but you are free
to use whatever works for you.

##### Ant
`ant clean-js resolve-js test-js`
##### Karma
`karma start config/karma-conf.js`

Requires [node.js](http://nodejs.org/), Karma (`sudo npm install -g karma karma-jasmine karma-chrome-launcher`) and a local or remote browser.
