import css from './slides.css'
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import routing from './routing.config'
import whatHtml5 from './what-html5.component'
import htmlLang from './html-lang.component'

export default angular.module('presentation-slides',[uiRouter])
	.config(routing)
	.component("whatHtml5",whatHtml5)
	.component("htmlLang",htmlLang)
	.name
