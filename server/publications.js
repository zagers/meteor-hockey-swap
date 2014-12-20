Meteor.publish('available', function(){
	return Items.find();
});