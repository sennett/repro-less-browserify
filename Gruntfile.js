module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
          dist: {
            files: {
              'build/app.js': 'src/app.js'
            },
            options: {
              transform: [
				  'grunt-less-browserify'
			  ]
            }
          }
        }
    });
    
    grunt.loadNpmTasks('grunt-browserify');
    
    grunt.registerTask('default', ['browserify']);
};