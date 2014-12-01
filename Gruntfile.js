module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      js: {
        files: [
          'app.js',
          'routes/**/*.js',
          'lib/*.js'
        ],
        tasks: ['develop'],
        options: { nospawn: true }
      }
    },
    develop: {
      server: {
        file: 'app.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-develop');

  grunt.registerTask('default', ['develop']);

};