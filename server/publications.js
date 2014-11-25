Meteor.publish('available', function(){
	return Available.find();
});