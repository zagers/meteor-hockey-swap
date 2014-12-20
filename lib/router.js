Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('available'); }
});

Router.route('/', {name: 'availableList'});
Router.route('/available/:_id', {
	name: 'availablePage',
	data: function() { return Items.findOne(this.params._id); }
});

Router.route('/submit_available', {name: 'availableSubmit'});

var requireLogin = function(){
	if (!Meteor.user()){
		this.render('accessDenied');
	} else {
		this.next();
	}
}

Router.onBeforeAction('dataNotFound', {only: 'availablePage'});
Router.onBeforeAction(requireLogin, {only: 'availableSubmit'});