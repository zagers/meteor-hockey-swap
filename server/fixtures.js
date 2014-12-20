if (Items.find().count() === 0){
  
  var joeId = Meteor.users.insert({
    username: 'joe'
  })
  
  Accounts.setPassword(joeId, 'abc123') 
	
  Items.insert({
		itemName: 'Skates',
		itemDescription: 'Bauer adult size 7',
    userId: joeId,
    dateAdded: new Date()
	});
	
	Items.insert({
		itemName: 'Helmet',
		itemDescription: 'Mission youth large',
    userId: joeId,
    dateAdded: new Date()
	});
	
	Items.insert({
		itemName: 'Pants',
		itemDescription: 'Adult large',
    userId: joeId,
    dateAdded: new Date()
	});
}