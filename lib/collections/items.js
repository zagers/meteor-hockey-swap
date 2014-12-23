Items = new Mongo.Collection('items');

EasySearch.createSearchIndex('items', {
	'field': ['itemName', 'itemDescription'],
	'collection': Items,
	'limit': 20
});

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
			userName: user.username,
			dateAdded: new Date()
		});
		var itemId = Items.insert(item);
		return {
			_id: itemId
		};
	}
});