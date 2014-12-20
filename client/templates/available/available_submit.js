Template.availableSubmit.events({
	'submit form' : function(e){
		e.preventDefault();
		
		var available = {
			itemName: $(e.target).find('[name=itemName]').val(),
			itemDescription: $(e.target).find('[name=itemDescription]').val()
		};
		
		Meteor.call('itemInsert', available, function(error, result){
			if (error)
				return alert(error.reason);
			Router.go('availablePage', {_id: result._id});
		});
	}
});