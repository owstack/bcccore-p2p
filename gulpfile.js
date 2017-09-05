'use strict';
var gulp = require('gulp');
var owsTasks = require('ows-build');
owsTasks('bcccore', 'p2p', {skipBrowser: true});
gulp.task('default', ['lint', 'coverage']);
