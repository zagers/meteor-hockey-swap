if (Available.find().count() === 0){
  
  var joeId = Meteor.users.insert({
    username: 'joe'
  })
  
  Accounts.setPassword(joeId, 'abc123') 
	
  Available.insert({
		itemName: 'Skates',
		itemDescription: 'Bauer adult size 7',
    userId: joeId,
    dateAdded: new Date()
	});
	
	Available.insert({
		itemName: 'Helmet',
		itemDescription: 'Mission youth large',
    userId: joeId,
    dateAdded: new Date()
	});
	
	Available.insert({
		itemName: 'Pants',
		itemDescription: 'Adult large',
    userId: joeId,
    dateAdded: new Date()
	});
}