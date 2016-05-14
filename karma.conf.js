// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['browserify', 'mocha', 'chai'],

    files: [
      'lib/test/**/*.js'
    ],

    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to the mocha web reporter
        ui: 'bdd'
      }
    },

    // coverage reporter generates the coverage
    reporters: ['progress'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'lib/test/**/*.js': ['browserify'],
      'lib/*.js': ['coverage']
    },

    browsers: ['Chrome']
  });
};
