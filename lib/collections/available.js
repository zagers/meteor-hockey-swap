Available = new Mongo.Collection('available');

Meteor.methods({
	availableInsert: function(availableAttributes){
		check(Meteor.userId(), String);
		check(availableAttributes, {
			itemName: String, 
			itemDescription: String
		});
		var user = Meteor.user();
		var available = _.extend(availableAttributes, {
			userId: user._id,
			dateAdded: new Date()
		});
		var availableId = Available.insert(available);
		return {
			_id: availableId
		};
	}
});