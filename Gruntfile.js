module.exports = function(grunt) {

  grunt.initConfig({
    clean : ["dist/"],
    concat: {
       
       js: { src: ['public/js/*.js'], dest: 'public/dist/railodocs.js' },
       css: { src: ['public/css/*.css'], dest: 'public/dist/railodocs.css' }
      }, 
    uglify: {
      options: {},
      dist: { files: { "public/dist/railodocs.min.js": ['public/dist/railodocs.js'] }}
      },
    cssmin: {
      main: {
        files: [{
                  expand: true,
                  cwd: 'public/css/',
                  src: ['*.css', '!*.min.css'],
                  dest: 'public/dist/',
                  ext: '.min.css'
                }]
          }
      }
  });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);

};