Items = new Mongo.Collection('items');

EasySearch.createSearchIndex('items', {
	'field': ['itemName', 'itemDescription'],
	'collection': Items,
	'limit': 2
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
			dateAdded: new Date()
		});
		var itemId = Items.insert(item);
		return {
			_id: itemId
		};
	}
});