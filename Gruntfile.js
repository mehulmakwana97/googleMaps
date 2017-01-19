/*global module:false*/
module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta : {
      banner : '/*!\n' +
      ' * googleMaps.js v<%= pkg.version %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' *\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %>, <%= pkg.author %>\n' +
      ' * Released under the <%= pkg.license %> License.\n' +
      ' */\n\n'
    },

    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: [
          'lib/googleMaps.core.js',
          'lib/googleMaps.controls.js',
          'lib/googleMaps.markers.js',
          'lib/googleMaps.overlays.js',
          'lib/googleMaps.geometry.js',
          'lib/googleMaps.layers.js',
          'lib/googleMaps.routes.js',
          'lib/googleMaps.geofences.js',
          'lib/googleMaps.static.js',
          'lib/googleMaps.map_types.js',
          'lib/googleMaps.styles.js',
          'lib/googleMaps.streetview.js',
          'lib/googleMaps.events.js',
          'lib/googleMaps.utils.js',
          'lib/googleMaps.native_extensions.js'
        ],
        dest: 'googleMaps.js'
      }
    },

    jasmine: {
      options: {
        template: 'test/template/jasmine-googleMaps.html',
        specs: 'test/spec/*.js',
        vendor: 'http://maps.google.com/maps/api/js?sensor=true',
        styles: 'test/style.css'
      },
      src : '<%= concat.dist.src %>'
    },

    watch : {
      files : '<%= concat.dist.src %>',
      tasks : 'default'
    },

    jshint : {
      all : ['Gruntfile.js']
    },

    uglify : {
      options : {
        sourceMap : true
      },
      all : {
        files: {
           'googleMaps.min.js': [ 'googleMaps.js' ]
        }
      }
    },

    umd : {
      all : {
        src : 'googleMaps.js',
        objectToExport : 'googleMaps',
        globalAlias : 'googleMaps',
        template : 'umd.hbs',
        deps: {
          amd: ['jquery', 'googlemaps!']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-umd');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['test', 'concat', 'umd', 'uglify']);
};
