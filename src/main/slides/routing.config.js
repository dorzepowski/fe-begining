export default function ($stateProvider) {
	$stateProvider
		.state('slides',{
			abstract: true,
			url: '',
			template: '<ui-view/>'
		})
		.state('slides.frontend',{
			url: '/frontend',
			template: '<what-html5/>'
		})
		.state('slides.frontend.html',{
			url: '/html',
			views: {
				'@slides': {
					template: '<html-lang/>'
				}
			}
		})




}
