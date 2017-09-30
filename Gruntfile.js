'use strict';

module.exports = function(grunt) {

  //time how long task take. can help when optimising build times
  require('time-grunt')(grunt);

  //automatically load required grunt tasks
  required('jit-grunt')(grunt);


  //define the configuration for all the tasks
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/styles.css': 'css/styles.scss'
        }
      }
    }

  });
  grunt.registerTask('css', ['sass']);
};
