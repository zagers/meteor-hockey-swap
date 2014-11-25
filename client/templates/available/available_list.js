Template.availableList.helpers({
	available: function() {
		return Available.find({}, {sort: {dateAdded: -1}});
	}
});