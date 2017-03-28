import angular from 'angular'
import AppController from './app.controller'
import slides from './slides/slides.module'

export default angular.module('fe', [slides])
	.controller('AppController',AppController)
	.run(function ($rootScope, $state) {
		$rootScope.st = $state;
	})
	.name;
