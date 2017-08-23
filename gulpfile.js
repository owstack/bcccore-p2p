'use strict';

var gulp = require('gulp');
var bcccoreTasks = require('bcccore-build');

bcccoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
