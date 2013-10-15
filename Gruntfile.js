module.exports = function(grunt) {
	
  grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-recess');

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	connect:{
	  	devserver:{
	  		options:{
	  			port: 8888,
	  			hostname : '0.0.0.0',
	  			base : '.',
	  			keepalive: true
	  		}
	  	}
  	},
    jshint: {
      options: {
        multistr: true,
        smarttabs: true
      },
      files: ['src/**/*.js']
    },
	  watch: {
      files: ['src/**/*.js'],
      tasks: ['jshint','uglify'],
      livereload: {
        options: {
          livereload: true
        },
        files: ['src/**/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.registerTask('webserver',['connect:devserver'])
  grunt.registerTask('build',['jshint','recess','copy','uglify'])
  grunt.registerTask('default',['build','webserver', 'watch'])
};