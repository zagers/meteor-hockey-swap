Template.availableList.helpers({
	available: function() {
		return Items.find({}, {sort: {dateAdded: -1}});
	}
});