Items = new Mongo.Collection('items');

Meteor.methods({
	itemInsert: function(itemAttributes){
		check(Meteor.userId(), String);
		check(itemAttributes, {
			itemName: String, 
			itemDescription: String
		});
		var user = Meteor.user();
		var item = _.extend(itemAttributes, {
			userId: user._id,
			dateAdded: new Date()
		});
		var itemId = Items.insert(item);
		return {
			_id: itemId
		};
	}
});