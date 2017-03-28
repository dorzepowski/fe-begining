import angular from 'angular'
import AppController from './app.controller'

const APP_NAME = "fe";

angular.module(APP_NAME, [])
	.controller("AppController",AppController);

export default APP_NAME;