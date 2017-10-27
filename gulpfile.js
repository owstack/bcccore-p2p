'use strict';
var gulp = require('gulp');
var owsTasks = require('@owstack/ows-build');
owsTasks('bch', 'p2p', {skipBrowser: true});
gulp.task('default', ['lint', 'coverage']);
